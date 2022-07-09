import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  content: string;
  @Input() dictionary;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(): void {
    setTimeout(() => {
      this.content = this.replaceShortcuts(this.content);
    }, 200);
  }

  replaceShortcuts(text: string): string {
    const replacement = text.replace(/not|and|or|then|iff/gi, match => {
      const symbol = this.dictionary[match.toUpperCase()];
      if (!symbol) { return match; }
      return symbol;
    });
    return replacement;
  }

}
