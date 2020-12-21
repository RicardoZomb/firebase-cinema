import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, HttpClientModule, AngularMaterialModule, ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class LoginModule { }
