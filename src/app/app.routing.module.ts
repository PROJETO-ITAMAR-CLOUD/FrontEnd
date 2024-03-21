import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { RecipeRegistrationComponent } from './Pages/recipe-registration/recipe-registration.component';
import { RecipeListingComponent } from './Pages/recipe-listing/recipe-listing.component';
import { RegisterComponent } from './Pages/register/register.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'Home', pathMatch: 'full' },
	{ path: 'Home', component: HomeComponent, title: 'Home' },
	{ path: 'Login', component: LoginComponent, title: 'Login' },
	{ path: 'Register', component: RegisterComponent, title: 'Registro de Usuário' },
	{ path: 'RegistrarReceita', component: RecipeRegistrationComponent, title: 'Registrar Receita',  },
	{ path: 'ListaReceita', component: RecipeListingComponent, title: 'Lista de Receitas' },

];
