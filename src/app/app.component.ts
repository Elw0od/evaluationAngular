import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './interface/menuItem.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Animal&Co';

  menuItems: MenuItem[] = [
    {
      displayText: "Chiens",
      link: "dog/list"
    },
    {
      displayText: "Chats",
      link: "cat/list"
    },
    {
      displayText: "Croquettes",
      link: "croquette/list"
    }
  ]

  constructor(
    private router: Router
  ) { }


  ngOnInit() {
    console.log('----> AppComponent');
  }

  goToPage(url: string) {
    this.router.navigateByUrl(url);
  }

}
