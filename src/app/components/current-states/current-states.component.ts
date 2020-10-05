import { Component, OnInit } from '@angular/core';
import { CurrentStateService } from "../../services/current-state.service";

@Component({
  selector: 'app-current-states',
  templateUrl: './current-states.component.html',
  styleUrls: ['./current-states.component.css']
})
export class CurrentStatesComponent implements OnInit {

  public currentValues = [];

  constructor(private currentStateServive: CurrentStateService) { }

  ngOnInit(): void {
    this.currentStateServive.getData().subscribe((data) => {
      this.currentValues = Array.from(Object.keys(data), k => data[k]);
    });
  }

  

}
