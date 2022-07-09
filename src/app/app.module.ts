import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ButtonModule } from 'primeng-lts/button';
import { InputSwitchModule } from 'primeng-lts/inputswitch';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { DropdownModule } from 'primeng-lts/dropdown';
import { CardModule } from 'primeng-lts/card';
import { TableModule } from 'primeng-lts/table';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { ToastModule } from 'primeng-lts/toast';
import { MessageService } from 'primeng-lts/api';
import { TrimPipe } from './trim.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputSwitchModule,
    InputTextareaModule,
    DropdownModule,
    CardModule,
    TableModule,
    FieldsetModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports: [
    TrimPipe
  ]
})
export class AppModule { }
