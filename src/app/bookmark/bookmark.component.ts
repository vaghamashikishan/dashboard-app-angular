import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bookmarkArray: any[] = [];
  addBookmark() {
    let bookmark = {
      icon: "https://wikipedia.com/favicon.ico",
      name: 'YouTube',
      link: 'https://youtube.com'
    }
    this.bookmarkArray.push(bookmark);
    console.log(this.bookmarkArray);

  }
}
