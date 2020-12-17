import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DashboardItem } from 'src/app/models/dashboard.model';

import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
    let component: LinkComponent;
    let fixture: ComponentFixture<LinkComponent>;
    let el: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LinkComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LinkComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a tag', () => {
        const aTag = el.query(By.css('a'));
        expect(aTag).toBeTruthy();
    });
});
