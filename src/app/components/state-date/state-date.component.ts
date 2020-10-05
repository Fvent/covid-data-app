import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateDateService } from 'src/app/services/state-date.service';

@Component({
  selector: 'app-state-date',
  templateUrl: './state-date.component.html',
  styleUrls: ['./state-date.component.css']
})
export class StateDateComponent implements OnInit {

  covidData;
  badRequest;

  stateDateForm: FormGroup = new FormGroup({
    stateSelected: new FormControl(''),
    dateSelected: new FormControl('')
  });

  constructor(private stateDateService: StateDateService) { }

  ngOnInit(): void {
  }

  onSelectButton() {
    console.log(this.stateDateForm.value.stateSelected);
    console.log(this.stateDateForm.value.dateSelected);
    this.stateDateService.getData(this.stateDateForm.value.stateSelected, 
      this.stateDateForm.value.dateSelected.replaceAll("-",""))
      .subscribe((data) => {
          this.covidData = data;
      });

  
  }

}
