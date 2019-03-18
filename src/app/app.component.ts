import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RoutesRecognized,NavigationEnd, Router, NavigationStart } from '@angular/router';
import { pairwise,filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  route:string
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
  //   route.events.pipe(filter(event => event instanceof NavigationStart))
  //   //.filter((event:Event) => event instanceof RoutesRecognized)
  //  .subscribe(()=>{
  //   console.log(this.activatedRoute.root)
  //   })

  }
  title = 'poc';
  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.route = this.activatedRoute.children[0].data.value.title;
    });
}

}
