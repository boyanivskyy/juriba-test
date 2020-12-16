import { DashboardItem } from './../../../../models/dashboard.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.scss'],
})
export class ImageFormatterComponent {
    params: any;

    agInit(params: DashboardItem): void {
        this.params = params;
    }
}
