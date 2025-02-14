import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GetAllDataService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
  }
  
  ruta = "https://stage-api.ftnmethod.com/api/ti-technical-interview/";
  getAllPsycoligist() {
    return this.http.get<User[]>(this.ruta + "psychologist");
  }
  getAllCoaches() {
    return this.http.get<User[]>(this.ruta + "coach");
  }
  getAllNutritionists() {
    return this.http.get<User[]>(this.ruta + "nutritionist");
  }

}