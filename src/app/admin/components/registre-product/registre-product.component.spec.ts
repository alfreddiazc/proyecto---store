import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreProductComponent } from './registre-product.component';

describe('RegistreProductComponent', () => {
  let component: RegistreProductComponent;
  let fixture: ComponentFixture<RegistreProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
