import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [HomeComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('Should display title as Unit Testing', () => {
    component.title = 'Unit Testing';
    fixture.detectChanges();

    const bannerDe: DebugElement = fixture.debugElement;
    const headingDe = bannerDe.query(By.css('h1'));
    const h1: HTMLElement = headingDe.nativeElement;
    expect(h1.textContent).toContain('Unit Testing');
  });
});
