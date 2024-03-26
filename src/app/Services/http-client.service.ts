import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProperty } from '../Models/property';
import { IRegister } from '../Models/register';
import { ILogin } from '../Models/login';
@Injectable({
	providedIn: 'root'
})
export class HttpService {
	private url = 'http://localhost:4000';
	private authToken: string = '';
	// private userIDdata: number = 0;
	constructor(private http: HttpClient) {}

	postDataLogin(data: ILogin) {
		return this.http
			.post(`${this.url}/login`, data, { responseType: 'json' })
			.subscribe(async (data: any) => {
				const response = data;

				if (response.token) {
					const userId = data.userId;
					localStorage.setItem('token', response.token);
					localStorage.setItem('userId', userId);
					window.location.href = '/Home';
				} else {
					console.error('Token não encontrado na resposta.');
				}
			});
	}

	postDataRegister(data: IRegister) {
		// const headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this.http.post(`${this.url}/user`, data).subscribe(async (data: any) => {
      const response = data;
      console.log(response);
    });
	}

	postDataProperty(data: IProperty) {
		async () => {
			const authToken = localStorage.getItem('token');
			if (!authToken) {
				console.error('Token de autenticação ausente ou inválido.');
				return;
			}

			const headers = new HttpHeaders()
				.set('Authorization', 'Bearer' + authToken)
				.set('Content-Type', 'application/json');
			return await this.http.post(`${this.url}/property`, data, { headers: headers });
		};
	}
	getDataProperty(data: any) {
		const headers = new HttpHeaders({
			Authorization: `Bearer ${this.authToken}`
		});

		return this.http.get<any>(`${this.url}/property`, { headers, params: { data } });
	}

	getDatabyIdUpdate(Id: number) {
		const DataID = Id;
		return this.http
			.get(`${this.url}/property/${DataID}`, { params: { DataID }, responseType: 'json' })
			.subscribe(async (data: any) => {
				const response = data.id;
				console.log('ID', response);

				if (response === DataID) {
					localStorage.setItem('PropertyIdLocal', response);
				}
			});
	}
}
