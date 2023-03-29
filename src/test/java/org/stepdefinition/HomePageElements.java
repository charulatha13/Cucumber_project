package org.stepdefinition;
import java.util.List;
import org.baseclass.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.interactions.Actions;

public class HomePageElements extends BaseClass {
	HomePageElements hp;
	Actions a=new Actions(driver);
	@When("the user entered the homepage")
	public void the_user_entered_the_homepage() {
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
	}

	@Then("Hower on the {string} and verify whether the drop down options are present or not")
	public void hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String optionstype)
	{
		if(optionstype.equals("salvarkameez")) {
			WebElement salvarkameez = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[13]"));	
			a.moveToElement(salvarkameez).perform();
			System.out.println(salvarkameez.getText());
			List<WebElement> salvaroptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[5]"));
			for(WebElement sal : salvaroptions) 
			{
				System.out.println(sal.getText());
			}
		}
		else if(optionstype.equals("saree")){
			WebElement saree = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[14]"));	
			a.moveToElement(saree).perform();
			System.out.println(saree.getText());
			List<WebElement> sareeoptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[6]"));
			for (WebElement sa : sareeoptions) {
				System.out.println(sa.getText());
			}}
		else if(optionstype.equals("blouse")) {
			WebElement blouse = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[15]"));	
			a.moveToElement(blouse).perform();
			System.out.println(blouse.getText());
			List<WebElement> blouseoptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-10/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[3]"));
			for (WebElement blo : blouseoptions) {
				System.out.println(blo.getText());} 
		}
		else if(optionstype.equals("lehanga")) {
			WebElement lehanga = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[16]"));	
			a.moveToElement(lehanga).perform();
			System.out.println(lehanga.getText());
			List<WebElement> lehangaoptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[7]"));
			for (WebElement leh : lehangaoptions) {
				System.out.println(leh.getText());}  
		}
		else if(optionstype.equals("indowestern"))
		{
			WebElement indowestern = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[17]"));	
			a.moveToElement(indowestern).perform();
			System.out.println(indowestern.getText());
			List<WebElement> indowesternoptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-1/2 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[2]"));
			for (WebElement indo : indowesternoptions)
			{
				System.out.println(indo.getText());
			}  
		}
		else if(optionstype.equals("kurtis")) 
		{
			WebElement kurtis = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[18]"));	
			a.moveToElement(kurtis).perform();
			System.out.println(kurtis.getText());
			List<WebElement> kurtisoptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[8]"));
			for (WebElement kur : kurtisoptions) {
				System.out.println(kur.getText());   }	  
		}
		else if(optionstype.equals("bridal")) 
		{
			WebElement bridal = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[19]"));	
			bridal.getText();	  
		}
		else if(optionstype.equals("men")) 
		{	
			WebElement men = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link cmsb420-!py-[0.7rem] cmsb420-!px-[0.6rem]')])[3]"));	
			a.moveToElement(men).perform();
			System.out.println(men.getText());
			WebElement options = driver.findElement(By.xpath("(//*[@class='mega-tab-menu-level1'])[13]"));
			System.out.println(options.getText()); 
		}
		else if(optionstype.equals("accessories")) 
		{
			WebElement accessories = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[20]"));	
			a.moveToElement(accessories).perform();
			System.out.println(accessories.getText());
			List<WebElement> accessoriesoptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-10/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[4]"));
			for (WebElement acc: accessoriesoptions) {
				System.out.println(acc.getText());} 
		}
		else if(optionstype.equals("kids")) 
		{
			WebElement kids = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[21]"));	
			a.moveToElement(kids).perform();
			System.out.println(kids.getText());
			List<WebElement> kidsoptions = driver.findElements(By.xpath("(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-[70%] cmsb420-2xl:w-[70%] cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[2]"));
			for (WebElement kid : kidsoptions) {
				System.out.println(kid.getText()); }	  
		}
		else if(optionstype.equals("collection"))
		{	 
			WebElement collection = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[22]"));	
			a.moveToElement(collection).perform();
			System.out.println(collection.getText());
			List<WebElement> collectionoptions = driver.findElements(By.xpath("(//div[@id='menusub-level10'])[2]"));
			for (WebElement coll : collectionoptions) {
				System.out.println(coll.getText());}  
		}
		else if(optionstype.equals("new")) 
		{
			WebElement new1 = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[23]"));	
			a.moveToElement(new1).perform();
			System.out.println(new1.getText());
			List<WebElement> newoptions = driver.findElements(By.xpath("(//div[@class='level1-1-1 cmsb420-!w-full'])[2]"));
			for (WebElement neww : newoptions) {
				System.out.println(neww.getText());}
		}
		else{

			WebElement sale = driver.findElement(By.xpath("(//*[contains(@class,'mega-tab-menu-parent-link  cmsb420')])[24]"));	
			a.moveToElement(sale).perform();
			System.out.println(sale.getText());
			List<WebElement> saleoptions = driver.findElements(By.xpath("(//div[@id='menusub-level12'])[2]"));
			for (WebElement sal : saleoptions) {
				System.out.println(sal.getText());}

		}

	}


}
