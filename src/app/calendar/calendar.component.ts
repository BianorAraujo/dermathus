import { Component } from '@angular/core';
import { Router } from '@angular/router';
export {}; declare global { interface Window { Calendly: any; } } 

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  	constructor(private router: Router) {}
  
  	ngOnInit(): void {
    	window.Calendly.initInlineWidget({
			url: 'https://calendly.com/dermathus?hide_gdpr_banner=1&text_color=5d101e&primary_color=5d101e',
			parentElement: document.querySelector('.calendly-inline-widget'),
    	});
  	}

  	navigateToHome() {
		this.router.navigate(['']);
	}

}
