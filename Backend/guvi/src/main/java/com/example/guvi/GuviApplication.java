package com.example.guvi;

import com.example.guvi.jwtfilter.Jwt;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GuviApplication {
	public static void main(String[] args) {
		SpringApplication.run(GuviApplication.class, args);
	}
//	@Bean
//	public FilterRegistrationBean jwtFilter(){
//		FilterRegistrationBean filterRegistrationBean=new FilterRegistrationBean();
//		filterRegistrationBean.setFilter(new Jwt());
//		filterRegistrationBean.addUrlPatterns("/api/v1/authenticate");
//		return filterRegistrationBean;
//
//	}


}
