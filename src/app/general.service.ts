import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

    constructor(private http: HttpClient /* ,private httpClient: HttpClient*/) { }

    getContentJSON() {
        return this.http.get('assets/questionnaire.json')
            .map((response: { json: () => any; }) => response.json());
    }

    getContentSJSON() {
        return this.http.get("assets/questionnaire.json");
    }
}
