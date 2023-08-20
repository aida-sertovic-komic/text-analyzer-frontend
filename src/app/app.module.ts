import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { TestAnalyzerEffects } from './store/text-analyzer.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CheckboxModule,
    BadgeModule,
    ButtonModule,
    RadioButtonModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([TestAnalyzerEffects]),
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
