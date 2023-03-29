package org.pomTest;

import org.baseclass.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BaseClass {

	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(className="max-1024:hidden")
	private WebElement acc1;
	
	@FindBy(id="email_id")
	private WebElement email;
	
	@FindBy(id="signinsubmit")
	private WebElement signinbtn;
	
	@FindBy(id="userpassword")
	private WebElement pass;
	
	
    @FindBy(id="signinsubmit")	
    private WebElement signin;
	
	
	public WebElement getacc1btn() {
		return acc1;
		
	}
	public WebElement gettxtemail() {
		return email;
		
	}
	public WebElement getsigninbtn() {
		return signinbtn;
		
	}
	public WebElement gettxtpassword() {
		return pass;
		
	}
	public WebElement getsigninsubmitbtn() {
		return signin;
		
	}
	
	
	
}
