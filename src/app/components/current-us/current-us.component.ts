import { Component, OnInit } from '@angular/core';
import { CurrentUSService } from "../../services/current-us.service";

@Component({
  selector: 'app-current-us',
  templateUrl: './current-us.component.html',
  styleUrls: ['./current-us.component.css']
})
export class CurrentUsComponent implements OnInit {

  public currentUSData = [];

  constructor(private currentUSService: CurrentUSService) { }

  ngOnInit(): void {
    this.currentUSService.getData().subscribe((data) => {
      this.currentUSData = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.currentUSData);
    });
  }

  ngOnChanges(): void{
    this.currentUSService.getData().subscribe((data) => {
      this.currentUSData = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.currentUSData);
    });
  }

}
