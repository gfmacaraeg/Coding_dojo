import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.modules';
import { CommunicateService} from './communicate.service'
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HomeComponent,
    ProductsComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    AppRoutingModule
  ],
  providers: [CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
