package poly;

public class PolyExample {

	public static void main(String[] args) {
		Savings_Account a1 = new Savings_Account();
		a1.setAcc_Id(101);
		a1.setAcc_Name("Rahul Gandhi");
		a1.setAcc_Bal(5000.00);
		a1.setMin_Bal(500.00);
		//a1.cal_Bal();
		System.out.println("***********");
		Current_Account a2 = new Current_Account();
		a2.setAcc_Id(102);
		a2.setAcc_Name("Priyanka Gandhi");
		a2.setAcc_Bal(50000.00);
		a2.setMin_Bal(25000.00);
		//a2.cal_Bal();
		
		AccountService.details(a1);
		AccountService.details(a2);
	}

}
