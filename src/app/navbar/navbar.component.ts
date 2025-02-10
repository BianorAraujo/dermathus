import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  	isScrolled = false;
  	logoSize = '210px';
	isNavbarOpen = false;

  	@HostListener('window:scroll', [])
	
	onWindowScroll() {
	const scrollPosition = window.scrollY || document.documentElement.scrollTop;
		if (scrollPosition > 50) {
			this.isScrolled = true;
			this.logoSize = '130px';
		} else {
			this.isScrolled = false;
			this.logoSize = '210px';
		}
	}

	toggleNavbar() {
		this.isNavbarOpen = !this.isNavbarOpen;
	}

	closeNavbar() {
		this.toggleNavbar();
	}
}
