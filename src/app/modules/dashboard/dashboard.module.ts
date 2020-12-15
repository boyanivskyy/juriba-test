import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AgGridModule.withComponents([DashboardComponent]),
    ],
})
export class DashboardModule {}
