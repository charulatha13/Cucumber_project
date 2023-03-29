package org.pomTest;


import org.baseclass.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
public class ProductBookingTillBuyNow extends BaseClass {
	
		public ProductBookingTillBuyNow()
		{
			PageFactory.initElements(driver, this);
		}
		//to click the first image in kurtis
		@FindBy(xpath="(//img[@class='product-image'])[1]")
		private WebElement frstkurtiinsearch;
		
		
		//scroll in java script executor
		@FindBy(xpath="(//span[@class='price'])[4]")
	private WebElement scroll;
		
		//clicking us size
			@FindBy(xpath="(//div[@class='whitespace-nowrap text-sm leading-18 font-normal'])[1]")
		private WebElement ussize;

//dropdown
			
	@FindBy(id="options_183895")
	private WebElement drop;
//buynow
	@FindBy(id="buy-now")
	private WebElement buynow;






}
