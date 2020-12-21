import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildImages();
    this.initializeLoginForm();
  }

  buildImages() {
    this.matIconRegistry.addSvgIcon('google',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/search.svg'));
  }

  clickButton(form: any) {
    console.log(form);
  }

  initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    });
  }
}
