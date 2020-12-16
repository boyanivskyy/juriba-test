import { Component } from '@angular/core';
import { DashboardItem } from 'src/app/models/dashboard.model';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
    params: any;

    agInit(params: DashboardItem): void {
        this.params = params;
    }
}
