import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoUser } from '../interfaces/infoUser';

@Injectable({
  providedIn: 'root'
})
export class GetDataUserService {

  constructor(
    private http: HttpClient
  ) {
    
  }
  ruta ="https://stage-api.ftnmethod.com/api/ti-technical-interview/details/?user_id="
   getDataUser(user_id: string) {
    return this.http.get<infoUser>(this.ruta + user_id);
   }
}
