import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingCardComponent } from './posting-card.component';

describe('PostingCardComponent', () => {
  let component: PostingCardComponent;
  let fixture: ComponentFixture<PostingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
