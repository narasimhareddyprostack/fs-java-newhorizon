package com.crm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.crm.dao.impl.RegistraionDaoImpl;
import com.crm.model.CustomerBean;
import com.crm.service.EmailService;

@Controller
public class RegistrationController {
	
	@Autowired
	EmailService emailService;
	
	@Autowired
	RegistraionDaoImpl regDao;
	
	
	
	@GetMapping("/index")
	public String getIndexPage() {
		return "index";
	}
	@GetMapping("/register")
	public String getRegistrationPage(Model model) {
		CustomerBean cb = new CustomerBean();
		model.addAttribute("custBean",cb);
		return "register";
	}
	
	@PostMapping("/save")
	public String registerCustomer(@ModelAttribute("custBean") CustomerBean cb) {
		//store data into Database
		System.out.println("Inside - registerCustomer");
		boolean flag = regDao.saveCustomer(cb);
		
		if(flag == true) {
			emailService.sendMailToCustomer(cb.getEmail(),cb.getFirstName());
			return "success";
		}
		else {
			return "register";
		}
		
	}
	
	  @GetMapping("/login")
	  public String loginCustomer() {
		  return "login";
	  }
		  
	  
}
