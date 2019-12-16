import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit{

  public names: string[] = [];

  public name: string;
  public currentRoute: string;
  constructor(private route: ActivatedRoute,private router: Router, private location: Location) { 
    console.log('[app:details] constructed app details');
    
  }

  ngOnInit(){
      this.currentRoute = this.router.url
  }
  addName(name) {
    this.names.push(name);
  }

  goBack(event: MouseEvent) {
    event.preventDefault();
    // Only go back if on second page
    // 
    if ( this.router.url === '/secondPage' ) {
      this.location.back();
    } else {
      alert('navigate to second page first');
    }
    
  }

}