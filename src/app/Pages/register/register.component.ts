import { Component } from '@angular/core';
import { HttpService } from '../../Services/http-client.service';
import { NavComponent } from "../../Components/nav/nav.component";

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    imports: [NavComponent]
})
export class RegisterComponent {
	email: string = '';
	password: string = '';
	constructor(private http: HttpService) {}

	getData() {
		const [dataEmail, dataPass] = [
			document.getElementById('email') as HTMLFormElement,
			document.getElementById('password') as HTMLFormElement
		];
		const data = { email: dataEmail['value'], password: dataPass['value'] };
		this.http.postDataRegister(data);
		console.log('Registro enviado!!');

		if (data) {
		  window.location.href = 'http://localhost:4200/Login';
		} else {
		  console.log('Erro ao enviar registro!');
		}

	}
}
