import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BillboardComponent } from './pages/landing-page/billboard/billboard.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, children: [
    { path: 'billboard', component: BillboardComponent },
    { path: 'movie-detail/:id', loadChildren: () =>
    import('../app/pages/landing-page/movie-detail/movie-detail.module').then(m => m.MovieDetailModule) },
    { path: '', redirectTo: '/billboard', pathMatch: 'full'}
  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
