package com.pms.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.entity.Product;
import com.pms.model.ProductDTO;
import com.pms.repository.ProductRepository;
import com.pms.service.IProductService;

@Service
public class ProductServiceImpl implements IProductService {

	@Autowired
	ProductRepository productRepo;

	@Override
	public List<ProductDTO> searchAllProducts() {
		
		List<Product> productList = productRepo.findAll();
		
		List<ProductDTO> productDTOList = new ArrayList();
		productList.forEach(product->{
			ProductDTO productDTO = new ProductDTO();
			BeanUtils.copyProperties(product, productDTO);
			productDTOList.add(productDTO);
		});
		return productDTOList;
	}

	@Override
	public ProductDTO searchProductById(Integer id) {
		Optional<Product>  opt= productRepo.findById(id);
		if(opt.isPresent()) {
			Product product = opt.get();
			ProductDTO productDTO = new ProductDTO();
			BeanUtils.copyProperties(product, productDTO);
			return productDTO;
		}
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ProductDTO> searchProductsByManufacturer(String manufacturer) {
		List<Product> productList = productRepo.findByManufacturer(manufacturer);
		List<ProductDTO> productDTOList=new ArrayList();
		
		productList.forEach(product->{
			ProductDTO productDTO = new ProductDTO();
			BeanUtils.copyProperties(product, productDTO);
			productDTOList.add(productDTO);
		});
		return productDTOList;
	}

	@Override
	public String addProduct(ProductDTO productDTO) {
		Product product = new Product();
		BeanUtils.copyProperties(productDTO, product);
		if(productRepo.existsById(product.getProductId())){
			return "product already exists";
		}
		else {
			productRepo.save(product);
			return "Proudct is Added to Database";
		}
	
	}

	@Override
	public ProductDTO updateProduct(ProductDTO productDTO) {
	  Product product = new Product();
	  BeanUtils.copyProperties(productDTO, product);
	  if(productRepo.existsById(product.getProductId())) {
		  productRepo.save(product);
		  return productDTO;
	  }
	  else {
			return null;
	  }
	
	}

	@Override
	public String deleteProductById(Integer Id) {
		if(productRepo.existsById(Id)) {
				productRepo.deleteById(Id);
				return "Product is deleted from Database";
		}
		else {
			return "Product Doesn't Exit";
		}
		
	}

}
