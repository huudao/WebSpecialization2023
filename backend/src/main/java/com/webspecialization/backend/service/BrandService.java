package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Brand;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.dto.BrandDTO;
import com.webspecialization.backend.model.response.BrandResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.repo.BrandRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private ProductVariantService productVariantService;

    ModelMapper mapper = new ModelMapper();

    public List<BrandResponse> getBrands() {
        List<Brand> brands = brandRepository.findAll();
        List<BrandResponse> brandResponses = new ArrayList<>();
        for(Brand brand : brands) {
            brandResponses.add(mapper.map(brand,BrandResponse.class));
        }
        return brandResponses;
    }

    public Brand findById(Long id) {
        return brandRepository.findById(id).orElseThrow(() -> new NotFoundException("Brand id not found"));
    }

    public List<ProductVariantResponse> findProductsByBrandId(long brandId) {
        return productVariantService.findProductsByBrandId(brandId);
    }

    public List<BrandResponse> addBrand(BrandDTO brandDTO) {
        Brand brand = mapper.map(brandDTO, Brand.class);
        brand.setCreatedDate(new Date());
        brand.setUpdatedDate(new Date());
        brandRepository.save(brand);
        return getBrands();
    }


    public List<BrandResponse> removeBrand(long id) {
        Brand brand = brandRepository.findById(id).orElseThrow(() -> new NotFoundException("Brand ID not found"));
        brandRepository.delete(brand);
        return getBrands();
    }
}
