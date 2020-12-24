import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getWiki(title: string) {
    const tempTitle = title.replace(' ', '_') + '?redirect=true';
    const baseUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    return this.http.get(baseUrl+tempTitle);
  }
}