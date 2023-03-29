package org.stepdefinition;

import org.baseclass.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass {
	@Before
	public void beforeScenario() {
		chromeLaunch();
		urlLaunch("https://www.kalkifashion.com/");
		impWait(20);
	}
	@After
	public void afterScenario() {
		driver.quit();
	}
}
