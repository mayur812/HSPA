import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any>=[];
  constructor (private http:HttpClient) {}
  ngOnInit(): void {
    this.http.get('src/data/properties.json').subscribe();
  }
}
