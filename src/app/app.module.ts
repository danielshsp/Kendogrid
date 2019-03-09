import { BrowserModule } from '@angular/platform-browser';
import { NgModule,enableProdMode  } from '@angular/core';


import { AppComponent } from './app.component';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { CategoriesService } from './northwind.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    HttpClientModule

  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
