package org.pomTest;

import java.util.List;

import org.baseclass.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchandPrinting extends BaseClass{
	public SearchandPrinting()
	{
		PageFactory.initElements(driver, this);
	}
	//searching a product(kurtis)
	@FindBy(id="search-input")
	private WebElement search;
	
	
	//all results names printing
	@FindBy(xpath="//span[@class='product-name']")
private List<WebElement> kurtiname;
	
	//all results price printing
		@FindBy(xpath="//span[@class='product-price-discounted']")
	private List<WebElement> price;
	
}
