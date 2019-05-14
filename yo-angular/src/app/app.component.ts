import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yo-angular';

  searchIncrease(searchHP: number){
    console.log('searchIncrease', searchHP);
  }
  searchdecrease(searchHP: number){
    console.log('searchdecrease', searchHP);
  }
}
