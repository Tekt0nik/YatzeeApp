import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YatzeecardComponentComponent } from './yatzeecard-component.component';

describe('YatzeecardComponentComponent', () => {
  let component: YatzeecardComponentComponent;
  let fixture: ComponentFixture<YatzeecardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YatzeecardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YatzeecardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
