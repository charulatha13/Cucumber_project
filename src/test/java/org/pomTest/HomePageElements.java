package org.pomTest;

import java.util.List;

import org.baseclass.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePageElements extends BaseClass{
 
	public HomePageElements()
	{
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="//div[@class='level0 cmsb420-lg:text-center cmsb420-relative cmsb420-mx-2.5']")
	private List<WebElement> elements;
	//=========================salvar==================================
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[13]")
	private WebElement salvarkameez;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[5]")
public List<WebElement> salvaroptions;
	
	//========================saree====================================
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[14]")
	private WebElement saree;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[6]")
private List<WebElement> sareeoptions;
	//==========================blouse=================================
	
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[15]")
	private WebElement blouse;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-10/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[3]")
private List<WebElement> blouseoptions;
	
	//==========================lehanga=====================================
	
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[16]")
	private WebElement lehanga;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[7]")
private List<WebElement> lehangaoptions;
	
	//============================indowestern===============================
	
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[17]")
	private WebElement indowestern;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-1/2 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[2]")
private List<WebElement> indowesternoptions;
	
	//===============================kurtis===================================
	
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[18]")
	private WebElement kurtis;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-9/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[8]")
private List<WebElement> kurtisoptions;
	
	//===============================no dropdown in bridal===================================
	
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[19]")
	private WebElement bridal;
	
	//===============================men===========================================
	
	@FindBy(xpath="(//span[text()='Men'])[2]")
	private WebElement men;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-[80%] cmsb420-2xl:w-[80%] cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[2]")
private List<WebElement> menoptions;
	
	//===============================options in accessories=================================
	
	@FindBy(xpath="(//a[text()='Accessories'])[2]")
	private WebElement accessories;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-10/12 cmsb420-2xl:w-4/5 cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[4]")
private List<WebElement> accessoriesoptions;
	
	
	//===============================options in kids=================================
	
	
	@FindBy(xpath="(//a[text()='Kids'])[2]")
	private WebElement kids;
	
	@FindBy(xpath="(//div[@class='level1-1 cmsb420-w-full cmsb420-md:w-[70%] cmsb420-2xl:w-[70%] cmsb420-flex-wrap cmsb420-mb-4 cmsb420-md:mb-0'])[2]")
private List<WebElement> kidsoptions;
	
	//===============================options in collection=================================
	
	@FindBy(xpath="(//a[text()='Collection'])[2]")
	private WebElement collection;
	
	@FindBy(xpath="(//div[@id='menusub-level10'])[2]")
private List<WebElement> collectionoptions;
	
	//===============================options in new=================================
	
	@FindBy(xpath="(//a[text()='New'])[2]")
	private WebElement new1;
	
	@FindBy(xpath="(//div[@class='level1-1-1 cmsb420-!w-full'])[2]")
private List<WebElement> newoptions;
	
//===============================options in sale=================================
	
	@FindBy(xpath="(//a[@class='mega-tab-menu-parent-link'])[24]")
	private WebElement sale;
	
	@FindBy(xpath="(//div[@id='menusub-level12'])[2]")
private List<WebElement> saleoptions;
	//ELEMENTS
	
	public List<WebElement> getelements(){
		return elements;
	}
	//=========================salvar==================================
		public WebElement getsalvarkameez() {
			
			return salvarkameez;
		}
		public List<WebElement> getsalvaroptions(){
			return salvaroptions;
		}
		
		//========================saree====================================
		public WebElement getsaree() {
			return saree;
		}
		public List<WebElement> getsareeoptions(){
			return sareeoptions;
		}
		
		//==========================blouse=================================
		public WebElement getblouse() {
			return blouse;
		}
		public List<WebElement> getblouseoptions(){
			return blouseoptions;
		}

		//==========================lehanga=====================================
		public WebElement getlehanga() {
			return lehanga;
		}
		public List<WebElement> getlehangaoptions(){
			return lehangaoptions;
		}
		
		//============================indowestern===============================
		public WebElement getindowestern() {
			return indowestern;
		}
		public List<WebElement> getindowesternoptions(){
			return indowesternoptions;
		}
		
		//===============================kurtis===================================
		public WebElement getkurtis() {
			return lehanga;
		}
		public List<WebElement> getkurtisoptions(){
			return lehangaoptions;
		}
		
		//===============================no dropdown in bridal===================================
		public WebElement getbridal() {
			return bridal;
		}
		
		//===============================men===========================================
		public WebElement getmen() {
			return men;
		}
		public List<WebElement> getmenoptions(){
			return menoptions;
		}
		
		//===============================options in accessories=================================
		public WebElement getaccessories() {
			return accessories;
		}
		public List<WebElement> getaccessoriesoptions(){
			return accessoriesoptions;
		}
	
		//===============================options in kids=================================
		
		public WebElement getkids() {
			return kids;
		}
		public List<WebElement> getkidsoptions(){
			return kidsoptions;
		}
		
		//===============================options in collection=================================
		public WebElement getcollection() {
			return collection;
		}
		public List<WebElement> getcollectionoptions(){
			return collectionoptions;
		}
	
		//===============================options in new=================================
		public WebElement getnew1() {
			return new1;
		}
		public List<WebElement> getnewoptions(){
			return newoptions;
		}

	//===============================options in sale=================================
		public WebElement getsale() {
			return sale;
		}
		public List<WebElement> getsaleoptions(){
			return saleoptions;
		}
		
   
}
