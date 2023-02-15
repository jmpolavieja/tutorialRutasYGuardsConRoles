import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsersComponent } from './tabla-users.component';

describe('TablaUsersComponent', () => {
  let component: TablaUsersComponent;
  let fixture: ComponentFixture<TablaUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
