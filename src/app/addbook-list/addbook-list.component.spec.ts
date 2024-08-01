import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookListComponent } from './addbook-list.component';

describe('AddbookListComponent', () => {
  let component: AddbookListComponent;
  let fixture: ComponentFixture<AddbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddbookListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
