import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeComponent } from './palindrome.component';
import { FormsModule } from '@angular/forms';

describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ PalindromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return longest palindromic substring', () => {
    const someString = 'as{dlaasñ{dlas';
    const longestPalindrome = component.largestPalindrome(someString);
    const expectWord = 'aa';
    expect(expectWord).toEqual(longestPalindrome);
  });
});
