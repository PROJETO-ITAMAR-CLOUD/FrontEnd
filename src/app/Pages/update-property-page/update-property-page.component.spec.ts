import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePropertyPageComponent } from './update-property-page.component';

describe('UpdatePropertyPageComponent', () => {
  let component: UpdatePropertyPageComponent;
  let fixture: ComponentFixture<UpdatePropertyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePropertyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
