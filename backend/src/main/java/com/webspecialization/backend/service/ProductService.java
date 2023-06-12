package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Brand;
import com.webspecialization.backend.entity.Image;
import com.webspecialization.backend.entity.Product;
import com.webspecialization.backend.entity.ProductVariant;
import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.dto.ProductVariantDTO;
import com.webspecialization.backend.model.request.AddProductRequest;
import com.webspecialization.backend.model.request.AddProductVariant;
import com.webspecialization.backend.model.request.UpdateProductRequest;
import com.webspecialization.backend.model.response.ProductDetailsResponse;
import com.webspecialization.backend.model.response.ProductResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.repo.ProductRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductVariantService productVariantService;
    @Autowired
    private Converter converter;
    @Autowired
    private BrandService brandService;
    ModelMapper modelMapper = new ModelMapper();


    public List<ProductVariantResponse> getAllProducts(int page, int size, String sortBy, String sortDirection) {
        List<ProductVariantResponse> products = productVariantService.findProductVariantsByVariantDefaultTrue(page,size, sortBy, sortDirection);
        return products;
    }

    public List<ProductVariantResponse> getProductVariantsByProductId(Long id) {
        List<ProductVariantResponse> products = productVariantService.getProductVariantsByProductId(id);
        return products;
    }

    public List<ProductVariantResponse> getProductVariantsByGender(String gender, int page, int size, String sortBy, String sortDirection) {
        List<ProductVariantResponse> products = productVariantService.findProductVariantsByGender(gender, page,size, sortBy, sortDirection);
        return products;
    }

    public Product getProductById(long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new NotFoundException("Product id not found"));
        return product;
    }
//
    public ProductDetailsResponse findProductVariantById(long productId, long variantId) {
        return productVariantService.findProductVariantDetailsById(variantId);
    }

    public List<ProductVariantResponse> searchProductsByKeyword(String keyword) {
        List<ProductVariantResponse> products = productVariantService.searchProductsByKeyword(keyword);
        return products;
    }

    public List<ProductVariantResponse> getRecommendedProducts(int productId) {
        // Get the latest 10 products
        return productVariantService.findProductVariantsByVariantDefaultTrue(0,10,"createdDate","desc");
    }


    public List<ProductVariantResponse> findLatestProducts() {
        // Get the latest 10 products
        return productVariantService.findProductVariantsByVariantDefaultTrue(0,10,"createdDate","desc");
    }

    public List<ProductVariantResponse> findMostViewProducts() {
        return productVariantService.findProductsHaveMostViews();
    }

//    For admin ----------------------------------------------------------------------------------------------------------
    public List<ProductResponse> getAllProductsForAdmin() {
        List<Product> productList = productRepository.findAll();
        if(productList.size() == 0 || productList == null) throw new NotFoundException("Empty Product List");

        List<ProductResponse> productResponseList = productList.stream().map(converter::convertProductToProductResponse).collect(Collectors.toList());

        return productResponseList;
    }
    public List<ProductVariantResponse> addProduct(AddProductRequest request) {
        if(checkExists(request.getName(), request.getBrandId())){
            throw new InvalidArgumentException("Product have already existed");
        }
        Product newProduct = new Product();
        Brand brand = brandService.findById(request.getBrandId());
        if (brand == null) throw new NotFoundException("Brand id not found");
        newProduct.setBrand(brand);
        newProduct.setName(request.getName());
        newProduct.setGenderType(request.getGenderType());
        newProduct.setDescription(request.getDescription());
        newProduct.setShippingPolicy(request.getShippingPolicy());
        newProduct.setCreatedDate(new Date());
        newProduct.setUpdatedDate(new Date());

        List<ProductVariant> productVariantList = request.getProductVariantList().stream()
                .map(converter::convertProductVariantDTOToProductVariant).collect(Collectors.toList());
        newProduct.setVariants(productVariantList);

        for(ProductVariant productVariant : productVariantList){
            productVariant.setProduct(newProduct);
            productVariant.setCreatedDate(new Date());
        }
        productRepository.save(newProduct);

        return getAllProducts(0,10, null,null);
    }

    private boolean checkExists(String name, long brandId) {
        if(productRepository.findProductByNameAndBrand_Id(name, brandId) != null){
            return true;
        }
        return false;
    }

    public List<ProductResponse> deleteProductById(Long id) {
        productRepository.deleteById(id);
        return getAllProductsForAdmin();
    }

    public List<ProductVariantResponse> addProductVariant(long id, AddProductVariant addProductVariant) {
        Product product = getProductById(id);
        ProductVariant productVariant = modelMapper.map(addProductVariant, ProductVariant.class);
        productVariant.setProduct(product);
        List<Image> imageList = new ArrayList<>();
        for(String image : addProductVariant.getImages()) {
            Image newImage = new Image(image);
            newImage.setProductVariant(productVariant);
            imageList.add(newImage);
        }
        productVariant.setImages(imageList);
        productVariant.setCreatedDate(new Date());
        productVariant.setUpdatedDate(new Date());
        product.getVariants().add(productVariant);
        productVariantService.save(productVariant);
        List<ProductVariantResponse> productVariantResponses = product.getVariants().stream()
                .map(converter::convertProductVariantToProductVariantResponse).collect(Collectors.toList());
        return productVariantResponses;
    }

    public List<ProductVariantResponse> deleteProductVariant(Long productId, Long productVariantId) {
        Product product = getProductById(productId);
        List<ProductVariant> productVariantList = product.getVariants();
        ProductVariant deletedProductVariant = null;
        boolean foundProductVariant = false;

        // remove product variant from the product list
        for(ProductVariant productVariant : productVariantList) {
            if (productVariant.getId() == productVariantId) {
                foundProductVariant = true;
                deletedProductVariant = productVariant;
                productVariantList.remove(productVariant);
            };
        };

        // if product variant not found => return error
        if(!foundProductVariant) throw new NotFoundException("ProductVariant of Product that you give is not exists");

        deletedProductVariant.setProduct(null);
        productVariantService.delete(deletedProductVariant);
        if(productVariantList.isEmpty() || productVariantList.size() == 0) return new ArrayList<>();
        else {
            return productVariantList.stream().map(converter::convertProductVariantToProductVariantResponse).collect(Collectors.toList());
        }
    }

    public List<ProductVariantResponse> updateProductVariant(Long productId, Long productVariantId, ProductVariantDTO productVariantDTO) {
        ProductVariant productVariant = productVariantService.findById(productVariantId);
        productVariant.setUpdatedDate(new Date());
        List<String> imageStringList = productVariantDTO.getImageList();
        if(productVariantDTO.getImageList() != null || !productVariantDTO.getImageList().isEmpty()) {
            List<Image> newImagesList = new ArrayList<>();
            for(String imageString : imageStringList) {
                newImagesList.add(new Image(imageString));
            }
            productVariant.setImages(newImagesList);
        }
        productVariant.setSize(productVariantDTO.getSize());
        productVariant.setPrice(productVariantDTO.getPrice());
        productVariant.setStock(productVariantDTO.getStock());
        productVariant.setDiscount(productVariantDTO.getDiscount());
        productVariant.setVariantDefault(productVariantDTO.isVariantDefault());
        productVariantService.save(productVariant);
        return getProductVariantsByProductId(productId);
    }

    public List<ProductResponse> updateProductById(Long productId, UpdateProductRequest updateProductRequest) {
        Product p = getProductById(productId);
        Brand newBrand = brandService.findById(updateProductRequest.getBrandId());
        p.setBrand(newBrand);
        p.setName(updateProductRequest.getName());
        p.setGenderType(updateProductRequest.getGenderType());
        p.setDescription(updateProductRequest.getDescription());
        p.setShippingPolicy(updateProductRequest.getShippingPolicy());
        productRepository.save(p);
        return getAllProductsForAdmin();
    }

//    public ProductResponse getProductResponseById(Long id) {
//        Product product = productRepository.findById(id).orElse(null);
//        if(product == null) throw new NotFoundException("Product not found");
//        ProductResponse productResponse = converter.convertProductToProductResponse(product);
//        return productResponse;
//    }
//
//    public ProductResponse updateProduct(AddProductRequest request) {
//        Product updatedProduct = productRepository.findById(request.getProductId()).orElse(null);
//        Date createdDate = updatedProduct.getCreatedDate();
//        productRepository.delete(updatedProduct);
//
//
//        Product newProduct = new Product();
//        Brand brand = brandService.findById(request.getBrandId());
//        if (brand == null) throw new NotFoundException("Brand id not found");
//        newProduct.setBrand(brand);
//        newProduct.setName(request.getName());
//        newProduct.setGenderType(request.getGenderType());
//        newProduct.setDescription(request.getDescription());
//        newProduct.setShippingPolicy(request.getShippingPolicy());
//        newProduct.setCreatedDate(createdDate);
//        newProduct.setUpdatedDate(new Date());
//
//        List<ProductVariant> productVariantList = request.getProductVariantList().stream()
//                .map(converter::convertProductVariantDTOToProductVariant).collect(Collectors.toList());
//        newProduct.setVariants(productVariantList);
//
//        for(ProductVariant productVariant : productVariantList){
//            productVariant.setProduct(newProduct);
//            productVariant.setCreatedDate(createdDate);
//            productVariant.setUpdatedDate(new Date());
//        }
//        productRepository.save(newProduct);
//        return converter.convertProductToProductResponse(newProduct);
//    }
//    public List<ProductVariantResponse> deleteProductVariant(long id) {
//        ProductVariant variant = productVariantService.findById(id);
//        if(variant.getProduct().getVariants().size() == 1) {
//            productRepository.delete(variant.getProduct());
//        } else{
//        productVariantService.deleteById(id);}
//        return getAllProductVariants();
//    }



}