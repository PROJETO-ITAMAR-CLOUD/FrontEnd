import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-botao-register-login',
	standalone: true,
	imports: [
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
	],
	templateUrl: './botao-register-login.component.html',
	styleUrl: './botao-register-login.component.css'
})
export class BotaoRegisterLoginComponent {}
