package com.crm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service	
public class EmailService {

	@Autowired
	JavaMailSender mailSender;
	public void sendMailToCustomer(String mailid, String name) {
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(mailid);
		mailMessage.setSubject("Mail from New Horizon College CRM Application");
		mailMessage.setText("Hello,"+ name + "Good Evening Thanks for Registration");
		mailSender.send(mailMessage);
		System.out.println("Email Message Sedning ....successfully");
	}
	
	
}
