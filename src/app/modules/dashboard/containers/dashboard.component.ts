import { LinkComponent } from './../components/link/link.component';
import { map, skip } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DashboardFacade } from './../services/dashboard.facade';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { ImageFormatterComponent } from '../components/thumbnail/thumbnail.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DatePipe],
})
export class DashboardComponent implements OnInit {
    rowData!: Observable<any>;
    selectedRowsCount = 0;
    selectionMode = true;
    selectAllRows: boolean;

    columnDefs: any;
    gridOptions = {} as GridOptions;

    @ViewChild('agGrid')
    agGrid!: AgGridAngular;
    gridApi: any;
    getRowNodeId: any;

    constructor(private dashboard$: DashboardFacade, private datePipe: DatePipe) {
        this.initGridSettings();
        this.selectAllRows = false;

        this.getRowNodeId = (data: any) => {
            return data?.id as string;
        };
    }

    ngOnInit(): void {
        this.dashboard$.getData();
    }

    onCheckboxChanged(event: any): void {
        this.selectAllRows = !this.selectAllRows;
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        this.selectedRowsCount = selectedNodes.length;
        if (this.selectedRowsCount === 0 || this.selectedRowsCount === 50) {
            this.dashboard$.setAllRowsSelection({
                selectAllRows: this.selectAllRows,
            });
        }
    }

    toggleSelectionMode(): void {
        this.selectionMode = !this.selectionMode;
        this.gridOptions?.columnApi?.setColumnVisible('checkbox', this.selectionMode);
        if (this.gridApi) {
            this.gridApi.sizeColumnsToFit();
        }
        if (!this.selectionMode) {
            this.dashboard$.clearRowForSelection();
            this.gridApi.forEachNode((node: any) => {
                node.setSelected(false);
            });
            this.selectAllRows = false;
            this.selectedRowsCount = 0;
        }
    }

    onGridReady(params: any): void {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.onCustomRowSelect();
    }

    private onCustomRowSelect(): void {
        this.dashboard$.rowForSelection$.pipe(skip(1)).subscribe((res) => {
            this.gridApi.forEachNode((node: any) => {
                const id = node.data.checkbox.id;
                if (id === res.selectedRawId) {
                    const rowNode = this.gridApi.getRowNode(id);
                    node.setSelected(!res.rowForSelection);
                    rowNode.setData({
                        ...node.data,
                        checkbox: {
                            id,
                            checked: !res.rowForSelection,
                        },
                    });
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
                name: 'select-all',
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
            animateRows: true,
            suppressRowClickSelection: true,
            rowSelection: 'multiple',
        };

        this.rowData = this.dashboard$.allItems$.pipe(
            map((items) => {
                const mapped = items.map((item) => ({
                    id: item.id,
                    checkbox: { id: item.id, checked: false },
                    thumbnail: item,
                    publishedAt: this.formatDate(item.snippet.publishedAt),
                    title: item,
                    description: item.snippet.description,
                }));
                return mapped;
            })
        );
    }

    private formatDate(date: string): string | null {
        return this.datePipe.transform(date, 'medium');
    }
}
