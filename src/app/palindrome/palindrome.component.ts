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
  isPalindrome(a , b): boolean {
    return a === b;
  }

  /**
   * Return the largest palindrome name
   * @param
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

     let longest = s.substring(0, 1);

     for (let i = 0; i < s.length; i++) {
      let temp = this.expand(s, i, i);
      if (temp.length > longest.length) {
        longest = temp;
      }
      temp = this.expand(s, i, i + 1);
      if (temp.length > longest.length) {
        longest = temp;
      }
    }

     this.isMessagesDisplayed = true;
     this.longestPalidrome = longest;
     return this.longestPalidrome;
  }

  /**
   * Return
   * @param
   * @returns string
   */
  expand(s, begin, end): string {
    while (begin >= 0 && end <= s.length - 1 && this.isPalindrome( s[begin] , s[end])) {
      begin--;
      end++;
    }

    return s.substring(begin + 1, end);
  }

  /**
   * Clean vars and hide alert
   * @param
   * @returns number
   */
  cleanWindow(): void {
    this.isMessagesDisplayed = false;
    this.inputValue = '';
    this.longestPalidrome = '';
  }

}
