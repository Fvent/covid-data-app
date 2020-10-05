import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class StateDateService{

    // private statedateurl = environment.stateapi;

    constructor(private http: HttpClient) {}

    getData(state, date) {
        // console.log(environment.stateapi+state+"/"+date+".json");
        return this.http.get(environment.stateapi+state+"/"+date+".json");
    }
}