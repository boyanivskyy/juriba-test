import { DashboardFacade } from './services/dashboard.facade';
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
import { ImageFormatterComponent } from './components/thumbnail/thumbnail.component';
import { LinkComponent } from './components/link/link.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
    declarations: [DashboardComponent, ImageFormatterComponent, LinkComponent, CheckboxComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AgGridModule.withComponents([]),
        StoreModule.forFeature(DASHBOARD_FEATURE_KEY, dashboardReducerFn),
        EffectsModule.forFeature([DashboardEffects]),
    ],
    providers: [DashboardFacade],
})
export class DashboardModule {}
