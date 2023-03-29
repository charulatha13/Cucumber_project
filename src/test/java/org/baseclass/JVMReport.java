package org.baseclass;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
public static void generateJVMReport(String json) {
	//mention the location
	File loc=new File(System.getProperty("user.dir")+"\\src\\test\\resources\\JVMReport");
	
    //configuration
	//need to download a dependency called cucumber reporting
	Configuration con=new Configuration(loc, "kalkiFashion");
	con.addClassifications("BrowserName", "chrome");
	con.addClassifications("OS", "Windows");
	con.addClassifications("Environment", "QA");
	con.addClassifications("Sprint", "10");
	
	//report builder
	//want to give json file in list
	List<String> jsonFiles=new LinkedList<String>();
	jsonFiles.add(json);
	ReportBuilder rb=new ReportBuilder(jsonFiles, con);
	rb.generateReports();
}}