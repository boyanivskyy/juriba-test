import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import {
    dashboardReducerFn,
    DASHBOARD_FEATURE_KEY,
} from 'src/app/modules/dashboard/state/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from 'src/app/modules/dashboard/state/dashboard.effects';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AgGridModule.withComponents([DashboardComponent]),
        StoreModule.forFeature(DASHBOARD_FEATURE_KEY, dashboardReducerFn),
        EffectsModule.forFeature([DashboardEffects]),
    ],
})
export class DashboardModule {}
