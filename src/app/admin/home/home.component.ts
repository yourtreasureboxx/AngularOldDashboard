import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
@ViewChild(MatSidenav) sidenav!: MatSidenav

constructor(private obs: BreakpointObserver) {}

  ngAfterViewInit(): void {
    this.obs.observe(['(max-width:400px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      } else {
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    })
  }

}
