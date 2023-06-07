import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPrincipalComponent } from './section-principal.component';

describe('SectionPrincipalComponent', () => {
  let component: SectionPrincipalComponent;
  let fixture: ComponentFixture<SectionPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPrincipalComponent]
    });
    fixture = TestBed.createComponent(SectionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
