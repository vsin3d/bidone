import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertPersonComponent } from './upsert-person.component';

describe('UpsertPersonComponent', () => {
  let component: UpsertPersonComponent;
  let fixture: ComponentFixture<UpsertPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
