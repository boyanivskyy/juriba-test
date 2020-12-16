import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../../../models/dashboard.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getData(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiUrl);
    }
}
