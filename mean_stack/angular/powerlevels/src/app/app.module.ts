import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './supersaiyanfour/supersaiyanfour.component'; // <-- Import HttpModule
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
    SupersaiyanfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
