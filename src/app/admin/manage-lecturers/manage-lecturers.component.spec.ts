import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLecturersComponent } from './manage-lecturers.component';

describe('ManageLecturersComponent', () => {
  let component: ManageLecturersComponent;
  let fixture: ComponentFixture<ManageLecturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLecturersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLecturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
