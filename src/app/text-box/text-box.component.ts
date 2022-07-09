import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  content: string;
  symbols;

  constructor() { }

  ngOnInit(): void {
    this.symbols = {
      'NOT': '˜',
      'AND': '∧ ',
      'OR': '∨ ',
      'THEN': '⊃ ',
      'IFF': '≡ '
    };
  }

  onInput(): void {
    setTimeout(() => {
      this.content = this.replaceShortcuts(this.content);
    }, 300);
  }

  replaceShortcuts(text: string): string {
    const replacement = text.replace(/not|and|or|then|iff/gi, match => {
      const symbol = this.symbols[match.toUpperCase()];
      if (!symbol) { return match; }
      return symbol;
    });
    return replacement;
  }

}
