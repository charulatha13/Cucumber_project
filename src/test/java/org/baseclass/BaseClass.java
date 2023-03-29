package org.baseclass;


import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.Alert;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass 
{
public static WebDriver driver;

public static WebDriver chromeLaunch()
{ 
	WebDriverManager.chromedriver().setup();
	ChromeOptions options=new ChromeOptions();	
	options.addArguments("--remote-allow-origins=*");
	options.addArguments("--disable notification");
	DesiredCapabilities cp=new DesiredCapabilities();
	cp.setCapability(ChromeOptions.CAPABILITY,options);
	options.merge(cp);
	driver  = new ChromeDriver(options);
	return driver;
}

public static WebDriver edgeLaunch()
{
	WebDriverManager.edgedriver().setup();
	driver = new EdgeDriver();
	return driver;
	}
//BROWSER LAUNCH
public static void browserLaunch(String browsername)
{
switch(browsername)	
{
case "chrome":
	WebDriverManager.chromedriver().setup();
	driver=new ChromeDriver();
	break;
	
case "edge":
	WebDriverManager.edgedriver().setup();
	driver=new EdgeDriver();
	break;
}}
	
//URL LAUNCH
	public static void urlLaunch(String url)
	{
		driver.get(url);
		driver.manage().window().maximize();
	}
	
//IMPLICIT WAIT
	public static void impWait(int sec)
	{
	driver.manage().timeouts().implicitlyWait(sec, TimeUnit.SECONDS);
	}
	
	//Webdriver wait
	public static void WebDriverWait(String url,String urlpresent) {
	WebDriverWait w=new WebDriverWait(driver,20);
	w.until(ExpectedConditions.urlContains(url));
	Assert.assertTrue("verify login url", driver.getCurrentUrl().contains(urlpresent));
	System.out.println("user in homepage");}
	
	
	//SENDKEYS
	public static void sendkeys(WebElement e,String data)
	{
	e.sendKeys(data);	
	}
	//CLICK
	public static void click(WebElement e) {
	e.click();
}
	//GET CURRENT URL
	public static String getCurrentUrl()
	{
	String currentUrl = driver.getCurrentUrl();
	return currentUrl;
	}
	//GET ATTRIBUTE
	public static String getAttribute(WebElement e) {
	String a = e.getAttribute("value");
	return a;}
	
	
	
	
	//DRAG AND DROP
	public static void dragAndDrop(WebElement from,WebElement to)
	{
	Actions a=new Actions(driver);
	a.dragAndDrop(from, to).perform();
	}
	//SIMPLE
	public static void simpleAlert()
	{
		Alert a=driver.switchTo().alert();
		a.accept();
	}
	
	//SELECT BY INDEX
	public static void selectByIndex(WebElement e,int index)
	{
		Select s=new Select(e);
				s.selectByIndex(index);
	}
	//SELECT BY VALUE
	public static void selectByValue(WebElement WebElementreference,String value ) {
		Select s=new Select(WebElementreference);
		s.selectByValue(value);
	}

	//actions
	public static void Actions(WebElement target) {
	Actions a=new Actions(driver);
	a.moveToElement(target).perform();
	}
	
	//robot
	public static void Robotclass() throws AWTException {
		Robot r=new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
	}
	
	public static void parentwindow() {
		String parentwindowid = driver.getWindowHandle();
		System.out.println("parentwindowid     "+parentwindowid);
	}
public static void switchtochildwindow() {
	String parentwindowid = driver.getWindowHandle();
	System.out.println("parentwindowid     "+parentwindowid);
		Set<String> allwindowid = driver.getWindowHandles();
		for (String string : allwindowid) {
			if(!parentwindowid.equals(string)) {
				System.out.println("child window id"+string);
				driver.switchTo().window(string);}}
	}
	
	public static void scrolldown(WebElement scroll) {
		JavascriptExecutor j=(JavascriptExecutor) driver;
		
		j.executeScript("arguments[0].scrollIntoView(true)",scroll);
	}
	
	

	//FRAMES
	public static void switchToFrame(int index)
	{
	driver.switchTo().frame(index);
	}
	//data driven
	public static String readexcel(String filename,String sheet,int row,int c) throws IOException
	{
		File f=new File("C:\\Users\\SHIVAKUMAR V\\charu eclipse workspace\\MavenProject\\src\\test\\resources\\Excel\\"+filename+".xlsx"); 
	     FileInputStream st=new FileInputStream(f);
	     Workbook w=new XSSFWorkbook(st);
	     Sheet s = w.getSheet(sheet);
	     Row r = s.getRow(row);
	     Cell cell = r.getCell(c);
	     int type = cell.getCellType();
	String value=null;  //the value will be null then the checks the conditions then it will assign a value here
	if(type==1)
	{
		value = cell.getStringCellValue();  //type 1 means string this method is to get the value in the string
		
	}
	else
	{
		if(DateUtil.isCellDateFormatted(cell)) { 
			Date date = cell.getDateCellValue();    
			SimpleDateFormat sd=new SimpleDateFormat("dd-MMM-YYY"); 
			value = sd.format(date);
			
		}
		else {
			double numericCellValue = cell.getNumericCellValue();
			long num=(long)numericCellValue;
			value = String.valueOf(num);
			
		
		}
	}
	return value;
	
	
	
	
	}








}
	
	

























