import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardFacade } from './../../services/dashboard.facade';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CheckboxComponent', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;
    let el: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CheckboxComponent],
            providers: [
                {
                    provide: DashboardFacade,
                    useValue: {
                        setRowForSelection: jest.fn(),
                        selectAllRaws$: of(true),
                    },
                },
                {
                    provide: Store,
                    useValue: {},
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        component.agInit({
            value: {
                checked: true,
                id: 'id',
            },
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(true).toBeTruthy();
    });

    it('should have input with type checkbox', () => {
        const inputEl = el.query(By.css('input'));
        const inputType = inputEl.nativeElement.attributes.type;
        expect(inputType).toBeTruthy();
    });

    it('shoud have correct checkbox value', () => {
        const inputEl = el.query(By.css('input'));
        expect(inputEl.nativeElement.checked).toBeTruthy();
    });

    it('shoud trigger checkbox change', () => {
        const inputEl = el.query(By.css('input'));
        inputEl.triggerEventHandler('change', null);
        const spy = jest.spyOn((component as any).dashboard$, 'setRowForSelection');
        expect(spy).toHaveBeenCalled();
        expect(component.params.value.checked).toBe(true);
    });
});
