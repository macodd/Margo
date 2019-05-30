import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

const ROOT_ENDPOINT = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }

  getHttpOptions(includeAuth: boolean = true){
    let myDefaultHeaders = {
      'Content-Type': 'application/json',
    };
    this.storage.get('authToken').then((val)=>{
      if (val && includeAuth){
        myDefaultHeaders['Authorization'] = 'JWT ' + String(val)
      }
    });
    return { headers: new HttpHeaders(myDefaultHeaders) }
  }

  login(userData) {
    const endpoint = String(ROOT_ENDPOINT) + 'auth/';
    const options = this.getHttpOptions(false);
    return this.http.post(endpoint, userData, options)
  }

  signup(formData){
    const endpoint = String(ROOT_ENDPOINT) + 'profiles/signup/';
    const options = this.getHttpOptions(false);
    return this.http.post(endpoint, formData, options)
  }

  setpassword(formData){
    const endpoint = String(ROOT_ENDPOINT) + 'profiles/setpass/';
    const options = this.getHttpOptions(false);
    return this.http.post(endpoint, formData, options)
  }

  setpin(formData){
    const endpoint = String(ROOT_ENDPOINT) + 'profiles/setpin/';
    const options = this.getHttpOptions(false);
    return this.http.post(endpoint, formData, options)
  }

  register(formData){
    const endpoint = String(ROOT_ENDPOINT) + 'profiles/register/';
    const options = this.getHttpOptions(false);
    return this.http.post(endpoint, formData, options)
  }
}
