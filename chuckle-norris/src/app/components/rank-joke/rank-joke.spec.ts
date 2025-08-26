import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankJoke } from './rank-joke';

describe('RankJoke', () => {
  let component: RankJoke;
  let fixture: ComponentFixture<RankJoke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankJoke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankJoke);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
