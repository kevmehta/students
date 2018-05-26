import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getClassData() {
    return this.http.get('../../../assets/jsons/class_data.json')
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json() || 'Server Error'));
  }

}
