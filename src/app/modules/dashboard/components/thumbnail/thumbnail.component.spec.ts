import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { dashboardIteMock } from '../item.mock';

import { ImageFormatterComponent } from './thumbnail.component';

describe('ImageFormatterComponent', () => {
    let component: ImageFormatterComponent;
    let fixture: ComponentFixture<ImageFormatterComponent>;
    let el: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ImageFormatterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageFormatterComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;

        component.agInit({
            value: dashboardIteMock,
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render element', () => {
        const element = el.query(By.css('img'));
        expect(element).toBeTruthy();
    });

    it('should have correct attributes in tag', () => {
        const element = el.query(By.css('img'));
        const attributes = element.nativeElement.attributes;
        expect(attributes?.width).toBeTruthy();
        expect(attributes?.height).toBeTruthy();
        expect(attributes?.src).toBeTruthy();
    });

    it('shout have correct data', () => {
        expect(component.params).toEqual({
            value: dashboardIteMock,
        });
    });
});
