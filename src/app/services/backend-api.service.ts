import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';


const ROOT_ENDPOINT = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(
    private http: HttpClient
  ) { }

  login() {
    console.log('working...')
  }
}
