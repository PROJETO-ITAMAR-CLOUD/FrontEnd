import { Component } from '@angular/core';
import { HttpService } from '../../Services/http-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { IRecipes } from '../../Models/Recipes';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../Components/nav/nav.component';

import { RouterLink } from '@angular/router';
@Component({
	selector: 'app-recipe-listing',
	templateUrl: './recipe-listing.component.html',
	standalone: true,
	styleUrls: ['./recipe-listing.component.css'],
	imports: [CommonModule, NavComponent]
})
export class RecipeListingComponent {
	recipes: IRecipes[] = [];

	constructor(private http: HttpService) {}

	ngOnInit(): void {
		this.getRecipes();
	}

	getRecipes() {
		this.http.getDataRecipe(this.recipes).subscribe((data: any) => {
			console.log('Buscar Receitas', data);
			this.recipes = data;
		});
	}

	getIdRecipeHtml(Id: any) {
		this.http.getDatabyIdUpdate(Id);

	}
}
