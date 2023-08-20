import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { EffectsModule } from '@ngrx/effects';
import { TestAnalyzerEffects } from './store/text-analyzer.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,CardModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CheckboxModule,
    BadgeModule,
    ButtonModule,
    RadioButtonModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([TestAnalyzerEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
