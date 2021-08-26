import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
post = {
    title:"lorem ipsum",
    isSelected: false,
  } 

OnFavoriteChanged(args:any){
  console.log('Favorite changed', args);
}

}
