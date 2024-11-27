import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
  	{path: 'calendar', component: CalendarComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { 
		anchorScrolling: 'enabled', 
		scrollPositionRestoration: 'enabled' 
	})],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
