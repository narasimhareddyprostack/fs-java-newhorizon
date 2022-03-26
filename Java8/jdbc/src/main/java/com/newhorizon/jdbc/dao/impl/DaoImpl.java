package com.newhorizon.jdbc.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.newhorizon.jdbc.dao.ITestDao;

@Repository
public class DaoImpl implements ITestDao {

@Autowired
JdbcTemplate jt;

	@Override
	public void insertRecords() {
		jt.update("insert into emp values(101, 'Rahul', 45000)");
		jt.update("insert into emp values(105, 'Rahul', 45000)");

	}

	@Override
	public List selectRecords() {
		
		return jt.queryForList("select * from emp");
	}

}
