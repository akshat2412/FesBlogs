import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tagged-articles-landing',
  templateUrl: './tagged-articles-landing.component.html',
  styleUrls: ['./tagged-articles-landing.component.css']
})
export class TaggedArticlesLandingComponent implements OnInit {
  selectedTag: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedTag = this.route.snapshot.params['tag'];
  }

  HandleTagClick(tag: string) {
    this.selectedTag = tag;
    this.router.navigate(['/articles', tag]);
  }

}
