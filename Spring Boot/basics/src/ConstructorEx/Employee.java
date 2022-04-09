package ConstructorEx;

public class Employee {
	int eid;
	String ename;
	double esal;
	
	Employee(int id, String name, double salary){
		this.eid = id;
		this.ename=name;
		this.esal = salary;
		System.out.println("Employee Class Construtor method");
	}

	public static void main(String[] args) {
		Employee e1= new Employee(101,"Rahul Gandhi", 45000.00);
		System.out.println(e1.eid + " : " + e1.ename +" : "+ e1.esal);
		
	}

}
