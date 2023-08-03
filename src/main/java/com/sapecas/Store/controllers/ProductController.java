package com.sapecas.Store.controllers;


import com.sapecas.Store.DTO.ProductDTO;
import com.sapecas.Store.models.ProductModel;
import com.sapecas.Store.services.ProductService;
import jakarta.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {
    
    @Autowired
    ProductService productService;
    
    @PostMapping
    public ResponseEntity<ProductModel> save(@RequestBody @Valid ProductDTO productDTO) {
        var newProduct = new ProductModel();
        BeanUtils.copyProperties(productDTO, newProduct);
        newProduct.setAddedDate(LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(newProduct));
    }
    
    @GetMapping
    public ResponseEntity<List<ProductModel>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.findAll());
    }
    
    @GetMapping("/{productName}")
    public ResponseEntity<List<ProductModel>> findByName(@PathVariable String productName) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.findByName(productName));
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<Object> delete(@PathVariable UUID id) {
        Optional<ProductModel> toBeDeleted = productService.findById(id);
        if (!toBeDeleted.isPresent()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
        productService.delete(toBeDeleted.get());
        return ResponseEntity.status(HttpStatus.OK).body("deleted");
    }
    
    @PutMapping("{id}")
    public ResponseEntity<Object> update(@PathVariable UUID id, @RequestBody @Valid ProductDTO productDTO) {
        Optional<ProductModel> toBeUpdated = productService.findById(id);
        if (!toBeUpdated.isPresent()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
        var updatedProduct = new ProductModel();
        BeanUtils.copyProperties(productDTO, updatedProduct);
        updatedProduct.setProduct_id(toBeUpdated.get().getProduct_id());
        updatedProduct.setAddedDate(LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.OK).body( productService.save(updatedProduct) );
        
    }
}
