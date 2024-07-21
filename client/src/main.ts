import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Agrega esta línea
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Agrega esta línea
  ]
})
.catch(err => console.error(err));