package com.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.model.ProductDTO;
import com.pms.service.IProductService;

@RestController
public class ProductRestController {


	@Autowired
	IProductService service;
	//localhost:8888/api/product/update
		@PutMapping(value="/proudct/update" ,consumes="application/json")
		public String updateProduct(@RequestBody ProductDTO productDTO) {
			System.out.println("inside Proudct update");
			ProductDTO dto= service.updateProduct(productDTO);
			if(dto==null) {
				return "Product is not exists";
			}
			else {
				return "Product is updated";
			}
		}
	//url:  httt://localhost:8888/api/allproducts
	@GetMapping(value="/allproducts", produces="application/json")
	public ResponseEntity<List<ProductDTO>> findAllProducts(){
		List<ProductDTO> productDTOList = service.searchAllProducts();
		return new ResponseEntity<List<ProductDTO>>(productDTOList,HttpStatus.OK);
	}
	
	//url:localhost:8888/api/product/101
	@GetMapping(value="/product/{Id}", produces="application/json")
	public ProductDTO findProductById(@PathVariable Integer Id) {
		System.out.println(Id);
		return service.searchProductById(Id);
	}
	
	//localhost:8888/api/proudcts/apple
	@GetMapping(value="/proudcts/{manufacturer}", produces="application/json")
	public List<ProductDTO> findProductByManufacturer(@PathVariable String manufacturer){
		return service.searchProductsByManufacturer(manufacturer);
	}
	//localhost:8888/api/product/add
	@PostMapping(value="/product/add", consumes="application/json")
	public String addProudct(@RequestBody ProductDTO productDTO) {
		return service.addProduct(productDTO);
	}
	
	//localhost:8888/api/product/delete/104
	@DeleteMapping(value="/product/delete/{id}")
	public String deleteProductById(@PathVariable Integer id) {
		return service.deleteProductById(id);
	}
}
