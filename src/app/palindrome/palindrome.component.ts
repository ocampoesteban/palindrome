import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  constructor() { }

  inputValue: string = '';
  longestPalidrome = '';
  isMessagesDisplayed: boolean= false;

  ngOnInit() {
  }

  /**
   * Return true whether both string are equal
   * @param a , b
   * @returns boolean
   */
  isPalindrome(a: string , b: string): boolean {
    return a === b;
  }

  /**
   * Return the largest palindrome name
   * @param s
   * @returns string
   */
  largestPalindrome(s): string {

     if (s.trim() === '') {  // Return whether the string has only white spaces
      this.isMessagesDisplayed = false;
      return;
    } else if ( s.length === 1) { // Return S whether string.lenght === 1
      this.isMessagesDisplayed = true;
      this.longestPalidrome = s;
      return this.longestPalidrome;
    }

     let largestPalindromeAux = s.substring(0, 1); // Init var with first letter of the string

     for (let i = 0; i < s.length; i++) {
      let substringExpanded = this.expandSearch(s, i, i); // Search a palindrome substring with a single letter in the center

      if (substringExpanded.length > largestPalindromeAux.length) {
        largestPalindromeAux = substringExpanded;
      }

      substringExpanded = this.expandSearch(s, i, i + 1); // Search a palindrome substring with 2 equal letters in the center
      if (substringExpanded.length > largestPalindromeAux.length) {
        largestPalindromeAux = substringExpanded;
      }
    }

     this.isMessagesDisplayed = true;
     this.longestPalidrome = largestPalindromeAux;
     return this.longestPalidrome;
  }

  /** Return the largest palindrome substring starting from init & end
   * @param stringAux, init , end
   * @returns string
   */
  expandSearch(stringAux: string, init: number, end: number): string {
    while (init >= 0 && end <= stringAux.length - 1 && this.isPalindrome( stringAux[init] , stringAux[end])) {
      init--;
      end++;
    }

    return stringAux.substring(init + 1, end);
  }

  /**
   * Clean vars and hide alert
   * @param
   * @returns
   */
  cleanWindow(): void {
    this.isMessagesDisplayed = false;
    this.inputValue = '';
    this.longestPalidrome = '';
  }

}
