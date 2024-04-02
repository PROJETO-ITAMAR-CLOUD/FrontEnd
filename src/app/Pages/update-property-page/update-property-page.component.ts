import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http-client.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-update-property-page',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './update-property-page.component.html',
	styleUrl: './update-property-page.component.css'
})
export class UpdatePropertyPageComponent implements OnInit {

	constructor(private http: HttpService) {}

	ngOnInit() {
		this.getPropertyLocal();
	}

	getPropertyLocal() {
		const property = localStorage.getItem('property');
		console.log(property);

		// localStorage.removeItem('property');
	}
}
