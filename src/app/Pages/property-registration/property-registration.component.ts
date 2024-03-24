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
		if (localStorage.getItem('token') == null) {
			window.location.href = 'http://localhost:4200/Login';
		}
	}

	PostProperty() {
		const [dataType, dataAddress, dataDescription, dataImageUrl, dataPrice] = [
			document.getElementById('Type') as HTMLFormElement,
			document.getElementById('Address') as HTMLFormElement,
			document.getElementById('Description') as HTMLFormElement,
			document.getElementById('ImageUrl') as HTMLFormElement,
			document.getElementById('Price') as HTMLFormElement
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
			imageUrl: dataDescription['value'],
			price: dataDescription['value']
		};
		this.http.postDataProperty(data);
	}
}
