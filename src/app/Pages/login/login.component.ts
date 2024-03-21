import { Component } from '@angular/core';
import { NavComponent } from '../../Components/nav/nav.component';
import { HttpService } from '../../Services/http-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {} from '../../Models/register';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
	selector: 'app-login',
	standalone: true,
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
	imports: [NavComponent, FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
	email: string = '';
	password: string = '';

	constructor(private http: HttpService) {}
	async getData() {
		const [dataEmail, dataPass] = [
			document.getElementById('email') as HTMLFormElement,
			document.getElementById('password') as HTMLFormElement
		];

		if (dataEmail['value'] == '' || dataPass['value'] == '') {
			alert('Preencha todos os campos!');
			return;
		}
		const data: any = { email: dataEmail['value'], password: dataPass['value'] };
		this.http.postDataLogin(data);
		const token = localStorage.getItem('token');
		if (token != null) {
			window.location.href = 'http://localhost:4200/Home';
		}
	}
}
