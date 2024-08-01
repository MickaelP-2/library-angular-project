import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookListComponent } from './editbook-list.component';

describe('EditbookListComponent', () => {
  let component: EditbookListComponent;
  let fixture: ComponentFixture<EditbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditbookListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
