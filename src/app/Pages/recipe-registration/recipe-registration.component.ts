import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from '../../Services/http-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../Components/nav/nav.component';

@Component({
	selector: 'app-recipe-registration',
	standalone: true,
	templateUrl: './recipe-registration.component.html',
	styleUrl: './recipe-registration.component.css',
	imports: [MatExpansionModule, FormsModule, ReactiveFormsModule, NavComponent]
})
export class RecipeRegistrationComponent implements OnInit {
	name: string = '';
	preparation: string = '';
	ingredients: string = '';

	constructor(private http: HttpService) {}
	ngOnInit(): void {
		if (localStorage.getItem('token') == null) {
			window.location.href = 'http://localhost:4200/Login';
		}
	}

	PostRecipe() {
		const [dataRecipeName, dataPreparation, dataIngredients] = [
			document.getElementById('RecipeName') as HTMLFormElement,
			document.getElementById('Preparation') as HTMLFormElement,
			document.getElementById('Ingredients') as HTMLFormElement
		];

		if (
			dataRecipeName['value'] == '' ||
			dataPreparation['value'] == '' ||
			dataIngredients['value'] == ''
		) {
			alert('Preencha todos os campos!');
			return;
		}
		const data: any = {
			name: dataRecipeName['value'],
			preparation: dataPreparation['value'],
			ingredients: dataIngredients['value']
		};
		this.http.postDataRecipe(data);
	}
}
