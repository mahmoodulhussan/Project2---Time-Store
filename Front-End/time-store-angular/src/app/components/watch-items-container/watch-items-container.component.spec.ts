import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchItemsContainerComponent } from './watch-items-container.component';

describe('WatchItemsContainerComponent', () => {
  let component: WatchItemsContainerComponent;
  let fixture: ComponentFixture<WatchItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchItemsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
