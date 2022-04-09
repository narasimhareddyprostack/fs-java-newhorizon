package com.crm.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.crm.dao.IRegistraionDao;
import com.crm.model.CustomerBean;

@Repository
public class RegistraionDaoImpl implements IRegistraionDao {

	@Autowired
	JdbcTemplate jt;
	@Override
	public boolean saveCustomer(CustomerBean cb) {
		// TODO Auto-generated method stub
		System.out.println(cb);
		jt.update("insert into User values(?,?,?,?)",cb.getFirstName(), cb.getEmail(),cb.getPassword() ,cb.getMobile());
		return true;
	}

}
