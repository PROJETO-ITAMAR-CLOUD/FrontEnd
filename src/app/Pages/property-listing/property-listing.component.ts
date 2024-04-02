import { Component } from '@angular/core';
import { HttpService } from '../../Services/http-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { IProperty } from '../../Models/property';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../Components/nav/nav.component';

import { Router } from '@angular/router';
@Component({
	selector: 'app-property-listing',
	templateUrl: './property-listing.component.html',
	standalone: true,
	styleUrls: ['./property-listing.component.css'],
	imports: [CommonModule, NavComponent]
})
export class PropertyListingComponent {
	property: IProperty[] = [];

	constructor(private http: HttpService, private route: Router) {}

	ngOnInit(): void {
		this.getProperty();
	}

	getProperty() {
		this.http.getDataProperty(this.property).subscribe((data: any) => {
			this.property = data;
		});
	}

	GetDadosProperytyParaPagina(property: any) {
		this.route.navigateByUrl('/AtualizarPropriedade', );
    localStorage.setItem('property', JSON.stringify(property));
	}
}
