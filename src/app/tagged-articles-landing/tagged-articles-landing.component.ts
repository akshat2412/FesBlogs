import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tagged-articles-landing',
  templateUrl: './tagged-articles-landing.component.html',
  styleUrls: ['./tagged-articles-landing.component.css']
})
export class TaggedArticlesLandingComponent implements OnInit {
  SelectedTag: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.SelectedTag = this.route.snapshot.params['tag'];
  }

  HandleTagClick(tag: string) {
    this.SelectedTag = tag;
    this.router.navigate(['/articles', tag]);
  }

}
