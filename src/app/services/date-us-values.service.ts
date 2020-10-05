import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class DateUsValuesService{

    private historicusurl = environment.usapi;

    constructor(private http: HttpClient) {}

    getData(date) {
        console.log(this.historicusurl+date+".json");
        return this.http.get(this.historicusurl+date+".json");
    }
}