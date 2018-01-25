import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  paramID: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.id);
      return this.paramID = res.id;
    });
  }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
