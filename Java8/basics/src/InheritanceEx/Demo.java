package InheritanceEx;

public class Demo {

	public static void main(String[] args) {
		Child c1 = new Child();
		c1.m1();
		c1.m2();
		c1.m3();	
		System.out.println("*********************");
		GrandChild c2 = new GrandChild();
		c2.m1();
		c2.m2();
		c2.m3();
		c2.m4();

	}

}
