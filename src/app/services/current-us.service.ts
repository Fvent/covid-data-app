import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class CurrentUSService{

    private currentusurl = environment.currentUSValues;

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get(this.currentusurl);
    }
}