import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public authService: AuthService) { }

  ngOnInit() {
    this.buildImages();
  }

  buildImages() {
    this.matIconRegistry.addSvgIcon('google',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/search.svg'));
  }

  clickButton() {
    console.log();
  }

}
