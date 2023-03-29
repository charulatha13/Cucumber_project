package org.stepdefinition;
import org.baseclass.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.pomTest.LoginPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends BaseClass{
	@Given("The user should be in login page")
	public void the_user_should_be_in_login_page() {
	}

	@When("The user has to click the signin link and then enter the {string} {string} then click the signin button")
	public void the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(String email, String password) {
		LoginPage l=new LoginPage();

		//click the sign in/sign up button
		click(l.getacc1btn());

		//passing email
		sendkeys(l.gettxtemail(),email);

		//button click
		click(l.getsigninbtn());

		//passing password
		sendkeys(l.gettxtpassword(),password);

		//clicking sign in submit button
		click(l.getsigninsubmitbtn());
	}
	@Then("the user should be in homepage")
	public void the_user_should_be_in_homepage() {
		WebDriverWait("kalkifashion", "kalki");	
		System.out.println("user in homepage");
		driver.quit();
	}
	@When("The user has to click the signin link and enter the {string}then click signin button")
	public void the_user_has_to_click_the_signin_link_and_enter_the_then_click_signin_button(String emailid) throws InterruptedException {	LoginPage l=new LoginPage();
	//click the sign in/sign up button
	click(l.getacc1btn());

	//passing email
	sendkeys(l.gettxtemail(),emailid);

	//button click
	click(l.getsigninbtn());

	String actual_error=driver.findElement(By.xpath("//*[@id='message_email']")).getText();
	String expected_error="Please provide valid email-id!!";
	Thread.sleep(3000);
	Assert.assertEquals(expected_error, actual_error);
	} 

	@Then("the user should get a invalid message")
	public void the_user_should_get_a_invalid_message() {
		{
			System.out.println("invalid");
			driver.quit();}
	}}



