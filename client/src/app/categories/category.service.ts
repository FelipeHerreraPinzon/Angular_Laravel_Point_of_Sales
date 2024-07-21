import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { Category } from './category';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = "http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/categorias/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(post: Category): Observable<any> {
    return this.httpClient.post(this.apiURL + '/categorias/', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/categorias/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, post: Category): Observable<any> {
    return this.httpClient.put(this.apiURL + '/categorias/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        tap(() => {
          Swal.fire({
            icon: 'success',
            title: 'Actualizado',
            text: 'El post ha sido actualizado correctamente',
            timer: 2000,
            timerProgressBar: true,
          });
        }),
        catchError(this.errorHandler)
      );
  }

  delete(id: number): Observable<any> {
    return new Observable(observer => {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.httpClient.delete(this.apiURL + '/categorias/' + id, this.httpOptions)
            .pipe(
              catchError(this.errorHandler)
            ).subscribe(
              data => {
                observer.next(data);
                observer.complete();
                Swal.fire(
                  '¡Eliminado!',
                  'El post ha sido eliminado.',
                  'success'
                )
              },
              error => {
                observer.error(error);
              }
            );
        } else {
          observer.complete();
        }
      });
    });
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}