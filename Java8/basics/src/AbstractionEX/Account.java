package AbstractionEX;

public class Account extends Bank {
	public void cal_Bal() {
		System.out.println("Account class - cal_Bal method");
		
	}
	public static void main(String[] args) {
		Account c1= new Account();
		c1.cal_Bal();
	}
}
