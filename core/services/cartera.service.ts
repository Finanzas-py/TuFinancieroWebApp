import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {CarteraOutput} from "../models/outputs/carteraOutput";
import {catchError, retry} from "rxjs/operators";
import {CarteraInput} from "../models/inputs/carteraInput";

@Injectable({
  providedIn: 'root'
})
export class CarteraService {

  //basePath='http://localhost:8084/api/document';
  basePath = 'https://tufinancierpo.azurewebsites.net/api/document';


  constructor(private http: HttpClient) {}

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};


  handleError(error: HttpErrorResponse): Promise<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.').toPromise();
  }


  addRegistry(item: any): Promise<CarteraInput>{
    return this.http.post<CarteraInput>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise()
  }


  getAllRegistries(): Promise<CarteraOutput>{
    return this.http.get<CarteraOutput>(this.basePath)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

}
