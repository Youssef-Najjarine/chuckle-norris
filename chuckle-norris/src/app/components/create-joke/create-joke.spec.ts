import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJoke } from './create-joke';

describe('CreateJoke', () => {
  let component: CreateJoke;
  let fixture: ComponentFixture<CreateJoke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateJoke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJoke);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
