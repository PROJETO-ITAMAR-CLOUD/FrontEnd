import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { PropertyRegistrationComponent } from './Pages/property-registration/property-registration.component';
import { PropertyListingComponent } from './Pages/property-listing/property-listing.component';
import { RegisterComponent } from './Pages/register/register.component';
import { authGuard } from './Services/auth.guard';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'Home', pathMatch: 'full' },
	{ path: 'Home', component: HomeComponent, title: 'Home' },
	{ path: 'Login', component: LoginComponent, title: 'Login' },
	{ path: 'Register', component: RegisterComponent, title: 'Registro de Usuário' },

	{
		path: 'RegistrarPropriedade',
		component: PropertyRegistrationComponent,
		title: 'Registrar Propriedade',
		canActivate: [authGuard]
	},

	{
		path: 'ListaPropriedade',
		component: PropertyListingComponent,
		title: 'Lista de Propriedades',
		canActivate: [authGuard]
	}
];
