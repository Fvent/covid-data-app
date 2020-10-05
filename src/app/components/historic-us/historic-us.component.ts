import { Component, OnInit, OnChanges } from '@angular/core';
import { HistoricUSService } from "../../services/historic-us.service";
import { HistoricUS } from "../../models/HistoricUS";
// import { DateFormatPipe } from "../../pipes/date-format.pipe";

@Component({
  selector: 'app-historic-us',
  templateUrl: './historic-us.component.html',
  styleUrls: ['./historic-us.component.css']
})
export class HistoricUsComponent implements OnInit {

  public historicUSData: Array<HistoricUS> = [];

  constructor(private historicUSService: HistoricUSService) { }

  ngOnInit(): void {
    this.historicUSService.getData().subscribe((data) => {
      this.historicUSData = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.historicUSData);
    });
  }

  // ngOnChanges(): void{
  //   this.historicUSService.getData().subscribe((data) => {
  //     this.historicUSData = Array.from(Object.keys(data), k=>data[k]);
  //     console.log(this.historicUSData);
  //   });
  // }
//   formatDate(dt) {
//     var date = dt.toString();
//     var yyyy = date.slice(0,4);
//     var mm = date.slice(4,6);
//     var dd = date.slice(6,8);
//     return mm + "/" + dd + "/" + yyyy;
// }

}
