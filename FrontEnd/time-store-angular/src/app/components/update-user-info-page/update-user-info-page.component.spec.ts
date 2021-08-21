import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserInfoPageComponent } from './update-user-info-page.component';

describe('UpdateUserInfoPageComponent', () => {
  let component: UpdateUserInfoPageComponent;
  let fixture: ComponentFixture<UpdateUserInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
