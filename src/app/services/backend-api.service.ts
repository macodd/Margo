import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

const ROOT_ENDPOINT = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  myToken: string = '';

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {
    this.storage.get('authToken').then((val)=>{
      this.myToken = val
    })
  }

  getHttpOptions(includeAuth: boolean = true){
    let myDefaultHeaders = {
      'Content-Type': 'application/json',
    };
    if (this.myToken && includeAuth){
        myDefaultHeaders['Authorization'] = 'JWT ' + String(this.myToken)
    }
    return { headers: new HttpHeaders(myDefaultHeaders) }
  }

  login(userData) {
    return this.post('auth/', userData, false)
  }

  transfer(transferData){
    return this.post('transfers/', transferData, true)
  }

  pincheck(pinData){
    return this.post('auth/pincheck/', pinData, true)
  }

  signup(formData){
    return this.post('auth/signup/', formData, false)
  }

  setpassword(formData){
    return this.post('auth/setpass/', formData, false)
  }

  setpin(formData){
    return this.post('auth/setpin/', formData, false)
  }

  register(formData){
    return this.post('auth/register/', formData, false)
  }

  get(path, includeAuth:boolean=false){
    const endpoint = String(ROOT_ENDPOINT) + String(path);
    const options = this.getHttpOptions(includeAuth);
    return this.http.get(endpoint, options)
  }

  post(path, data:{}, includeAuth:boolean=true){
    const endpoint = String(ROOT_ENDPOINT) + String(path);
    const options = this.getHttpOptions(includeAuth);
    return this.http.post(endpoint, data, options)
  }

  put(path, data:{}, includeAuth:boolean=true){
    const endpoint = String(ROOT_ENDPOINT) + String(path);
    const options = this.getHttpOptions(includeAuth);
    return this.http.put(endpoint, data, options)
  }
}
