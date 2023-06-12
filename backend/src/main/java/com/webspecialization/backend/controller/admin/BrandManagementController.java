package com.webspecialization.backend.controller.admin;

import com.webspecialization.backend.model.dto.BrandDTO;
import com.webspecialization.backend.model.response.BrandResponse;
import com.webspecialization.backend.model.response.GetUserResponse;
import com.webspecialization.backend.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class BrandManagementController {
    @Autowired
    private BrandService brandService;

    @GetMapping("/brand")
    public ResponseEntity<List<BrandResponse>> getAllBrands(){
        return ResponseEntity.ok(brandService.getBrands());
    }

    @PostMapping("/brand")
    public ResponseEntity<List<BrandResponse>> addBrand(@RequestBody BrandDTO brandDTO) {
        return ResponseEntity.ok(brandService.addBrand(brandDTO));
    }

    @DeleteMapping("/brand/{id}")
    public ResponseEntity<List<BrandResponse>> addBrand(@PathVariable long id) {
        return ResponseEntity.ok(brandService.removeBrand(id));
    }
}
