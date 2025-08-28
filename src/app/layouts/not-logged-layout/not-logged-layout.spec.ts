import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedLayout } from './not-logged-layout';

describe('NotLoggedLayout', () => {
  let component: NotLoggedLayout;
  let fixture: ComponentFixture<NotLoggedLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotLoggedLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotLoggedLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
