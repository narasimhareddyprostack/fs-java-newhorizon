package EncapsulationEx;
import EncapsulationEx.Account;
public class AccountDemo {

	public static void main(String[] args) {
		Account a1 = new Account();
		a1.setAcc_Id(101);
		a1.setAcc_Name("Rahul Gandhi");
		a1.setAcc_Bal(5000.00);
		System.out.println(a1.getAcc_Id());
		System.out.println(a1.getAcc_Name());
		System.out.println(a1.getAcc_Bal());
		

	}

}
