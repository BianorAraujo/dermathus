import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forRoot(routes, { 
		anchorScrolling: 'enabled', 
		scrollPositionRestoration: 'enabled' 
	})],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
