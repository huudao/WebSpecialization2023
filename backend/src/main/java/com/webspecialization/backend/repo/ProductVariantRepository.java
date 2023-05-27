package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.ProductVariant;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductVariantRepository extends JpaRepository<ProductVariant, Long> {
    List<ProductVariant> findProductVariantsByVariantDefaultIsTrue(Pageable pageable);
    @Query("SELECT pv FROM ProductVariant pv JOIN pv.product p WHERE pv.variantDefault = true AND p.genderType = :gender")
    List<ProductVariant> findProductVariantsByGender(String gender, Pageable pageable);

    @Query("SELECT pv FROM ProductVariant pv JOIN pv.product p WHERE pv.variantDefault = true AND p.name LIKE %:keyword%")
    List<ProductVariant> findProductVariantByKeyword(String keyword);

    @Query("SELECT pv FROM ProductVariant pv JOIN pv.product p WHERE p.brand.id = :brandId AND pv.variantDefault = true")
    List<ProductVariant> findProductVariantByBrandId(long brandId);

    @Query("SELECT pv FROM ProductVariant pv JOIN pv.product p WHERE pv.variantDefault = true ORDER BY p.productViews DESC")
    List<ProductVariant> findProductVariantsHaveMostViews(Pageable pageable);
    ProductVariant findProductVariantsById(Long id);


}
