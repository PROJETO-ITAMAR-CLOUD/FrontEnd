import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BotaoRegisterLoginComponent } from '../botao-register-login/botao-register-login.component';

@Component({
	selector: 'app-nav',
	standalone: true,
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.css',
	imports: [
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		BotaoRegisterLoginComponent
	]
})
export class NavComponent {}
