import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('drawer' , { static: true }) snav: any;

  public mobileQuery: MediaQueryList;

  isHandset$: Observable<boolean> = this.breakpointServer.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(private breakpointServer: BreakpointObserver,
    private media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 731px)');
    }

  ngOnInit() {
  }

  closeSidenav() {
    if (this.mobileQuery.matches !== false) {
      this.snav.close();
    }
  }

  @HostListener('window: scroll', ['event']) scrollHandler(event) {
    const height = window.scrollY;
    const el = document.getElementById('btn-returnToTop');
    height >= 500 ? el.className = 'show' : el.className = 'hide';
  }

  scrollTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
