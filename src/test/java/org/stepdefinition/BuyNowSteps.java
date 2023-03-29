package org.stepdefinition;
import org.baseclass.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import io.cucumber.java.en.Then;

public class BuyNowSteps extends BaseClass {
	@Then("click the first product which is displayed")
	public void click_the_first_product_which_is_displayed() throws InterruptedException {
		//to click the first image in kurtis
		WebElement frstkurtiinsearch = driver.findElement(By.xpath("(//img[@class='product-image'])[1]"));
		//windows handling
		parentwindow();
		frstkurtiinsearch.click();
		switchtochildwindow();
		Thread.sleep(3000);
	}

	@Then("selecting all the details based on the product we are booking")
	public void selecting_all_the_details_based_on_the_product_we_are_booking() throws InterruptedException {
		//scrolldown
		JavascriptExecutor j=(JavascriptExecutor) driver;
		WebElement scroll = driver.findElement(By.xpath("//span[@class='base']"));
		j.executeScript("arguments[0].scrollIntoView(true)",scroll);
		Thread.sleep(3000);
		WebElement ussize = driver.findElement(By.xpath("(//div[@class='whitespace-nowrap text-sm leading-18 font-normal'])[1]"));
		ussize.click();

		//dropdown
		WebElement drop = driver.findElement(By.xpath("//*[@id='options_234425' or @class='form-select                       product-custom-option']"));
		drop.click();
		Thread.sleep(3000);
		selectByIndex(drop,2);
	}

	@Then("click the buy now button to book the product")
	public void click_the_buy_now_button_to_book_the_product() throws InterruptedException {
		Thread.sleep(3000);
		WebElement buynow = driver.findElement(By.id("buy-now"));
		Thread.sleep(3000);
		buynow.click();
		Thread.sleep(3000);

	}


}
