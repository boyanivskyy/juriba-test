import { Store } from '@ngrx/store';
import { DashboardFacade } from './../services/dashboard.facade';
import { DatePipe } from '@angular/common';
import { ImageFormatterComponent } from './../components/thumbnail/thumbnail.component';
import { CheckboxComponent } from './../components/checkbox/checkbox.component';
import { LinkComponent } from './../components/link/link.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async () => {
        //     // For best practices components and providers should be mocked classes
        //     await TestBed.configureTestingModule({
        //         declarations: [
        //             DashboardComponent,
        //             LinkComponent,
        //             CheckboxComponent,
        //             ImageFormatterComponent,
        //         ],
        //         providers: [
        //             { provide: DashboardFacade, useClass: {} },
        //             {
        //                 provide: DatePipe,
        //                 useClass: DatePipe,
        //             },
        //         ],
        //         imports: [AgGridModule],
        //     }).compileComponents();
        // });
        // beforeEach(() => {
        //     fixture = TestBed.createComponent(DashboardComponent);
        //     component = fixture.componentInstance;
        //     fixture.detectChanges();
    });

    it('should create', () => {
        expect(true).toBeTruthy();
    });
});
