import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HistoricStateService } from "../../services/historic-state.service";

@Component({
  selector: 'app-historic-states',
  templateUrl: './historic-states.component.html',
  styleUrls: ['./historic-states.component.css']
})
export class HistoricStatesComponent implements OnInit {

  stateData = [];

  selectForm: FormGroup= new FormGroup({
    stateSelected: new FormControl('')
  });

  constructor(private hitoricStateService: HistoricStateService) { }

  ngOnInit(): void {
  }

  onSelectButton(){

    var stVal = this.selectForm.value.stateSelected;
    if(stVal){
      console.log(this.selectForm.value.stateSelected);
      this.hitoricStateService.getData(stVal).subscribe((data)=>{
        this.stateData = Array.from(Object.keys(data), k => data[k]);
      });
    }
  }

}
