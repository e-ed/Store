/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sapecas.Store.services;

import com.sapecas.Store.models.ProductModel;
import com.sapecas.Store.repositories.ProductRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author eduardo
 */

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    
    @Transactional
    public ProductModel save(ProductModel p) {
        return productRepository.save(p);
    }

    public List<ProductModel> findAll() {
        return productRepository.findAll();
    }
    
    public List<ProductModel> findByName(String productName) {
        return productRepository.findByProductNameContainingIgnoreCase(productName);
    }

    public Optional<ProductModel> findById(UUID id) {
        return productRepository.findById(id);
    }

    @Transactional
    public void delete(ProductModel toBeDeleted) {
        productRepository.delete(toBeDeleted);
    }
    
    
    
}
