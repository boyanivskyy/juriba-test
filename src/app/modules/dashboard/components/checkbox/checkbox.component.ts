import { DashboardFacade } from './../../services/dashboard.facade';
import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
    params: any;
    isChecked = false;

    constructor(private dashboard$: DashboardFacade) {
        // this.dashboard$;
    }

    agInit(params: any): void {
        this.params = params;
    }

    onCheckboxValueChanged(): void {
        this.isChecked = !this.isChecked;
        this.dashboard$.setRowForSelection({ id: this.params.value.id, value: this.isChecked });
    }
}
