import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  panelOpenState = false;
  title = 'Prueba-Menu-JSON';
  url = 'http://65.99.252.132:7431/menu';
  items = [];
  primarymenu = [];
  constructor(private http:HttpClient){
    this.http.get(this.url).toPromise().then(data =>{
      console.log(data);

      for(let key in data)
        if(data.hasOwnProperty(key))
          this.items.push(data[key]);
    });
  }

}
