import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleMapsModule } from '@angular/google-maps';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-google-maps',
  template: `
    @if(apiLoaded | async) {
    <google-map />
    }
  `,
  styles: ``,
  standalone: true,
  imports: [GoogleMapsModule, AsyncPipe],
})
export class GoogleMapsComponent {
  httpClient = inject(HttpClient);
  apiLoaded: Observable<boolean> = this.httpClient
    .jsonp('https://maps.googleapis.com/maps/api/js?key=API_KEY', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false))
    );
}
