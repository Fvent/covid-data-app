import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class HistoricUSService{

    private historicusurl = environment.historicUSValues;

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get(this.historicusurl);
    }
}