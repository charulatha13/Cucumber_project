package org.stepdefinition;
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;

import org.baseclass.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchPageContentSteps extends BaseClass{
	@Given("The user should be in kalki fashion homepage")
	public void the_user_should_be_in_kalki_fashion_homepage()  {
		getCurrentUrl();
	}

	@When("the user search the product kurthi")
	public void the_user_search_the_product_kurthi() throws AWTException {
		WebElement search = driver.findElement(By.id("search-input"));
		search.sendKeys("kurtis");
		Robotclass();
	}

	@Then("print all product names and price to verify whether it is accurate")
	public void print_all_product_names_and_price_to_verify_whether_it_is_accurate() throws InterruptedException 
	{
		for (int i=0; i<=8 ; i++) 
		{
			List<WebElement> kurtiname = driver.findElements(By.xpath("//span[@class='product-name']"));
			for (WebElement kurtinames : kurtiname) 
			{
				System.out.println(kurtinames.getText());
			}
			//all results price printing
			List<WebElement> price = driver.findElements(By.xpath("//span[@class='product-price-discounted']"));
			for(WebElement pricelist:price)
			{
				String s = pricelist.getText();
				s=s.replace("₹", "");
				s= s.replace(",", "");
				System.out.println(s);
			}
			for (int j=i; j<=i; j++)
			{
				JavascriptExecutor js=(JavascriptExecutor) driver;
				js.executeScript("window.scrollBy(0,2000)", "");
				Thread.sleep(3000);
				WebElement nxt = driver.findElement(By.xpath("//button[text()='Next']"));
				//	//next
				nxt.click();
				Thread.sleep(3000);
			}
		}
		//for last page we dont use next
		for (int i=9; i<=9 ; i++) 
		{
			List<WebElement> kurtiname = driver.findElements(By.xpath("//span[@class='product-name']"));
			for (WebElement kurtinames : kurtiname) 
			{
				System.out.println(kurtinames.getText());
			}
			//all results price printing
			List<WebElement> price = driver.findElements(By.xpath("//span[@class='product-price-discounted']"));
			for(WebElement pricelist:price)
			{
				String s = pricelist.getText();
				s=s.replace("₹", "");
				s= s.replace(",", "");
				System.out.println(s);
			}

		}
	}}

