import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialExtraComponent } from './ngx-material-extra.component';

describe('NgxMaterialExtraComponent', () => {
  let component: NgxMaterialExtraComponent;
  let fixture: ComponentFixture<NgxMaterialExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMaterialExtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMaterialExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
