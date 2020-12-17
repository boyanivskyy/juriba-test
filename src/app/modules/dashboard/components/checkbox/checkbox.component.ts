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

    constructor(private dashboard$: DashboardFacade) {
        this.onSelectAllRows();
    }

    agInit(params: any): void {
        this.params = params;
        console.log(this.params.value.name);
    }

    onCheckboxValueChanged(): void {
        this.isChecked = !this.isChecked;
        this.dashboard$.setRowForSelection({ id: this.params.value.id, value: this.isChecked });
    }

    private onSelectAllRows(): void {
        this.dashboard$.selectAllRaws$.pipe(skip(1)).subscribe((res) => {
            this.isChecked = res;
        });
    }
}
