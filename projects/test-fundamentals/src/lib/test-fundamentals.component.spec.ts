import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFundamentalsComponent } from './test-fundamentals.component';

describe('TestFundamentalsComponent', () => {
  let component: TestFundamentalsComponent;
  let fixture: ComponentFixture<TestFundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFundamentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
