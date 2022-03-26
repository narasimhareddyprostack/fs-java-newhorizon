package ConstructorEx;

public class Child extends Parent {
	Child(){
		super();
		System.out.println("Child Class Constructor");
	}
	public static void main(String[] args) {
		new Child();

	}

}
