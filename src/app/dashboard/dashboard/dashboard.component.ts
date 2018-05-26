import { Component, OnInit, NgModule } from '@angular/core';
import { MatToolbarModule, MatTableModule } from '@angular/material';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  classesData: any;
  headerColumns = ['class', 'classTeacher'];

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.getClassData().subscribe(data => {
      this.classesData = data.classes;
    });
  }

  ngOnInit() {
  }

}
