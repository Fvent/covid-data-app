import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class HistoricStateService{

    private historicstateurl = environment.stateapi;

    constructor(private http: HttpClient) {}

    getData(state: string) {
        return this.http.get(this.historicstateurl+state+"/daily.json");
    }
}