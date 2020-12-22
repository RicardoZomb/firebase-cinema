import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { BillboardModule } from './billboard/billboard.module';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, BillboardModule],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
