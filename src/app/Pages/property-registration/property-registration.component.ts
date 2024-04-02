import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from '../../Services/http-client.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../Components/nav/nav.component';

@Component({
	selector: 'app-property-registration',
	standalone: true,
	templateUrl: './property-registration.component.html',
	styleUrl: './property-registration.component.css',
	imports: [MatExpansionModule, FormsModule, ReactiveFormsModule, NavComponent]
})
export class PropertyRegistrationComponent implements OnInit {
	propertyForm = new FormGroup({
		type: new FormControl(''),
		address: new FormControl(''),
		description: new FormControl(''),
		imageUrl: new FormControl(''),
		status: new FormControl(''),
		price: new FormControl(0)
	});

	constructor(private http: HttpService) {}
	ngOnInit(): void {}

	PostProperty() {
		const data = this.propertyForm.value;
		console.log(data);

		if (Object.values(data).some((value) => value === '')) {
			alert('Preencha todos os campos!');
			return;
		}

		this.http.postDataProperty(data);
	}
}
