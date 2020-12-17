import { skip } from 'rxjs/operators';
import { DashboardFacade } from './../../services/dashboard.facade';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
    params: any;
    isChecked = false;
    prevCheckboxValue: {
        rowForSelection: any;
        selectedRawId: any;
    } = {
        rowForSelection: null,
        selectedRawId: null,
    };

    constructor(private dashboard$: DashboardFacade) {
        // this.dashboard$;
        this.onSelectAllRows();
    }

    agInit(params: any): void {
        this.params = params;
    }

    onCheckboxValueChanged(): void {
        this.isChecked = !this.isChecked;
        this.dashboard$.setRowForSelection({ id: this.params.value.id, value: this.isChecked });
    }

    private onSelectAllRows(): void {
        this.dashboard$.selectAllRaws$.pipe(skip(1)).subscribe((res) => {
            if (JSON.stringify(this.prevCheckboxValue) === JSON.stringify(res.rowForSelection)) {
                this.isChecked = res.selecteAllRows;
            }
            this.prevCheckboxValue = res.rowForSelection;
        });
    }
}
