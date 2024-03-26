import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from '../../Services/http-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../Components/nav/nav.component';

@Component({
	selector: 'app-property-registration',
	standalone: true,
	templateUrl: './property-registration.component.html',
	styleUrl: './property-registration.component.css',
	imports: [MatExpansionModule, FormsModule, ReactiveFormsModule, NavComponent]
})
export class PropertyRegistrationComponent implements OnInit {
	type: string = '';
	address: string = '';
	description: string = '';
	imageUrl: string = '';
	price: string = '';

	constructor(private http: HttpService) {}
	ngOnInit(): void {
		// console.log('token', localStorage.getItem('token'));
		// if (localStorage.getItem('token') == null) {
		// 	window.location.href = 'http://localhost:4200/Login';
		// }
		// localStorage.clear();
	}

	PostProperty() {
		const [dataType, dataAddress, dataDescription, dataPrice, dataImageUrl] = [
			document.getElementById('Type') as HTMLFormElement,
			document.getElementById('Address') as HTMLFormElement,
			document.getElementById('Description') as HTMLFormElement,
			document.getElementById('Price') as HTMLFormElement,
			document.getElementById('ImageUrl') as HTMLFormElement
		];

		if (
			dataType['value'] == '' ||
			dataAddress['value'] == '' ||
			dataDescription['value'] == '' ||
			dataImageUrl['value'] == '' ||
			dataPrice['value'] == ''
		) {
			alert('Preencha todos os campos!');
			return;
		}
		const data: any = {
			type: dataType['value'],
			address: dataAddress['value'],
			description: dataDescription['value'],
			imageUrl: dataImageUrl['value'],
			price: dataPrice['value']
		};

		console.log(data);
		this.http.postDataProperty(data);
	}
}
