import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../Environment/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
private ContactApiV1= API_ENDPOINTS.baseUrl+ 'v1.0'+ API_ENDPOINTS.contact;
private MenuBarApiV1= API_ENDPOINTS.baseUrl+ 'v1.0'+ API_ENDPOINTS.Menus;
private FooterApiV1= API_ENDPOINTS.baseUrl+ 'v1.0'+ API_ENDPOINTS.MenuItems;
private LogoApiV1= API_ENDPOINTS.baseUrl+ 'v1.0'+ API_ENDPOINTS.logoV1;

constructor(private http:HttpClient) { }



}
