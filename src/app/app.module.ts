import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { InputSwitchModule } from 'primeng-lts/inputswitch';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { DropdownModule } from 'primeng-lts/dropdown';
import { CardModule } from 'primeng-lts/card';
import { TableModule } from 'primeng-lts/table';
import { FieldsetModule } from 'primeng-lts/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    InputTextareaModule,
    DropdownModule,
    CardModule,
    TableModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
