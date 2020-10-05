import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateUsValuesService } from "../../services/date-us-values.service";

@Component({
  selector: 'app-historic-date-us',
  templateUrl: './historic-date-us.component.html',
  styleUrls: ['./historic-date-us.component.css']
})
export class HistoricDateUsComponent implements OnInit {

  covidData;

  dateSelection: FormGroup= new FormGroup({
    date: new FormControl('')
  });

  constructor(private dateUsValuesService: DateUsValuesService) { }

  ngOnInit(): void {
  }

  onSelectButton() {
    console.log(this.dateSelection.value.date.replaceAll("-",""));
    this.dateUsValuesService.getData(this.dateSelection.value.date.replaceAll("-","")).subscribe((data) => {
      // this.covidData = Array.from(Object.keys(data), k=> data[k]);
      this.covidData = data;
    });
  }


}
