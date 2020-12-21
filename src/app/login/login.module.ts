import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../shared/angular-material.module';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, HttpClientModule, AngularMaterialModule],
  declarations: [LoginComponent]
})
export class LoginModule { }
