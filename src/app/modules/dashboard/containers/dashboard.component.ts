import { LinkComponent } from './../components/link/link.component';
import { map, skip } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DashboardFacade } from './../services/dashboard.facade';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { DashboardActions } from '../state/dashboard.actions';
import { DashboardPartialState } from '../state/dashboard.reducer';
import { DashboardEntity } from 'src/app/models/dashboard.model';
import { AgGridAngular } from 'ag-grid-angular';
import { ImageFormatterComponent } from '../components/thumbnail/thumbnail.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
    rowData: Observable<any>;
    selectedRowsCount = 0;
    selectionMode = true;

    columnDefs: any;
    gridOptions: GridOptions;

    @ViewChild('agGrid') agGrid: AgGridAngular;
    gridApi: any;

    constructor(private dashboard$: DashboardFacade) {
        this.initGridSettings();
    }

    ngOnInit(): void {
        this.dashboard$.getData();
    }

    ngAfterViewInit(): void {
        // this.api;
    }

    onCheckboxChanged(): void {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        this.selectedRowsCount = selectedNodes.length;
    }

    toggleSelectionMode(): void {
        this.selectionMode = !this.selectionMode;
        this.gridOptions.columnApi.setColumnVisible('checkbox', this.selectionMode);
        if (this.gridApi) {
            this.gridApi.sizeColumnsToFit();
        }
    }

    onGridReady(params: any): void {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.onCustomRowSelect();
    }

    private onCustomRowSelect(): void {
        this.dashboard$.rowForSelection$.pipe(skip(1)).subscribe((res) => {
            console.log(res);
            this.gridApi.forEachNode((node) => {
                const id = node.data.checkbox.id;
                if (id === res.selectedRawId) {
                    node.setSelected(res.rowForSelection);
                }
            });
        });
    }

    private initGridSettings(): void {
        this.columnDefs = [
            {
                field: 'checkbox',
                headerCheckboxSelection: (params: any) => {
                    const displayedColumns = params.columnApi.getAllDisplayedColumns();
                    return displayedColumns[0] === params.column;
                },
                headerName: '',
                width: 20,
                headerRendererFramework: CheckboxComponent,
                cellRendererFramework: CheckboxComponent,
                editable: false,
            },
            {
                field: 'thumbnail',
                headerName: '',
                width: 120,
                sortable: false,
                filter: false,
                autoHeight: true,
                cellRendererFramework: ImageFormatterComponent,
                resizable: true,
            },
            {
                field: 'publishedAt',
                headerName: 'Published On',
                sortable: true,
                filter: true,
                resizable: true,
            },
            {
                field: 'title',
                headerName: 'Video Title',
                sortable: false,
                filter: false,
                autoHeight: true,
                cellRendererFramework: LinkComponent,
                resizable: true,
            },
            { field: 'description', sortable: true, filter: true },
        ];

        this.gridOptions = {
            suppressRowClickSelection: true,
            rowSelection: 'multiple',
            isNodeSelectable: false,
        };

        this.rowData = this.dashboard$.allItems$.pipe(
            map((items) => {
                const mapped = items.map((item) => ({
                    checkbox: item,
                    thumbnail: item,
                    publishedAt: item.snippet.publishedAt,
                    title: item,
                    description: item.snippet.description,
                }));
                return mapped;
            })
        );
    }
}
