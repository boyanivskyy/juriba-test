import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { DashboardActions } from '../state/dashboard.actions';
import { DashboardPartialState } from '../state/dashboard.reducer';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    columnDefs = [
        { field: '', sortable: false, filter: false },
        { field: 'Published On', sortable: true, filter: true },
        { field: 'Video Title', sortable: true, filter: true },
        { field: 'Description', sortable: true, filter: true },
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];

    gridOptions: GridOptions;

    constructor(private store: Store<DashboardPartialState>) {
        this.gridOptions = {
            context: {
                componentParent: this,
            },
        };

        // this.gridOptions.rowData = this.c;
    }

    ngOnInit(): void {
        this.store.dispatch(DashboardActions.getData());
    }
}
