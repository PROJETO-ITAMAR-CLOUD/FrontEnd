import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecipes } from '../Models/recipes';
import { IRegister } from '../Models/register';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	private url = 'http://localhost:4000';
	private authToken: string = '';
	private userIDdata: number = 0;

	constructor(private http: HttpClient) {}

	postDataLogin(data: any) {
		return this.http
			.post(`${this.url}/login`, data, { responseType: 'json' })
			.subscribe(async (data: any) => {
				const response = data;

				if (response.token) {
					const userId = data.userId;
					localStorage.setItem('token', response.token);
					localStorage.setItem('userId', userId);
				} else {
					console.error('Token não encontrado na resposta.');
				}
			});
	}

	postDataRegister(data: IRegister) {
		return this.http.post(`${this.url}/user`, data);
	}

	postDataRecipe(data: IRecipes) {
		const authToken = localStorage.getItem('token');
		if (!authToken) {
			console.error('Token de autenticação ausente ou inválido.');
			return;
		}

		// const headers = new HttpHeaders({
		//   'Authorization': "Bearer" + authToken,
		//   'Content-Type': 'application/json'
		// });
		const headers = new HttpHeaders()
			.set('Authorization', 'Bearer' + authToken)
			.set('Content-Type', 'application/json');
		return this.http.post(`${this.url}/recipe`, data, { headers: headers });
	}
	getDataRecipe(data: any) {
		const headers = new HttpHeaders({
			Authorization: `Bearer ${this.authToken}`
		});

		// Requisição GET com o token no cabeçalho
		return this.http.get<any>(`${this.url}/recipe`, { headers, params: { data } });
	}

	getDatabyIdUpdate(Id: number) {
		const DataID = Id;
		return this.http
			.get(`${this.url}/recipe/${DataID}`, { params: { DataID }, responseType: 'json' })
			.subscribe(async (data: any) => {
				 const response = data.id;
          console.log('ID', response);

				if (response === DataID) {
					localStorage.setItem('RecipeIdLocal', response);
				}
			});
	}
}
