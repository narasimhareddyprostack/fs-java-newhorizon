package superEx;

public class Savings_Account extends Account{
	public double min_Bal = 700.00;
	
	public double cal_Bal() {
		return 5000.00 - min_Bal;
	}
	public void get_MinBal() {
		System.out.println(super.min_Bal);
		System.out.println(cal_Bal());
		System.out.println(super.cal_Bal());
	}
	
	public static void main(String[] args) {
		Savings_Account a1 = new Savings_Account();
		a1.get_MinBal();
		
	}

}
