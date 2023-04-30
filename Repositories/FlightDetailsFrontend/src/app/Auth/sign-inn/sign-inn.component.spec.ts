import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInnComponent } from './sign-inn.component';

describe('SignInnComponent', () => {
  let component: SignInnComponent;
  let fixture: ComponentFixture<SignInnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
