import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForFontComponent } from './child-for-font.component';

describe('ChildForFontComponent', () => {
  let component: ChildForFontComponent;
  let fixture: ComponentFixture<ChildForFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildForFontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildForFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
