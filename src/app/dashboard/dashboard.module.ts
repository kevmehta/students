import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatTableModule } from '@angular/material';

import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

const dashboardRoutes: Routes = [
    { path: 'home', component: DashboardComponent },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        RouterModule.forRoot(dashboardRoutes),
        MatToolbarModule,
        MatTableModule
    ],
    exports: [DashboardComponent]
})
export class DashboardModule { }
