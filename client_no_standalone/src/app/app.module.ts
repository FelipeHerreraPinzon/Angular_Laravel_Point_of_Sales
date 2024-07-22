import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 // Asegúrate de que la ruta es correcta
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { CreateComponent } from './categories/create/create.component';
import { EditComponent } from './categories/edit/edit.component';
import { IndexComponent } from './categories/index/index.component';
import { ViewComponent } from './categories/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    VentasComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
