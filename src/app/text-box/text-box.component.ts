import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  content: string;
  @Input() dictionary;
  currentDictionary;

  constructor() { }

  ngOnInit(): void {
    this.currentDictionary = {...this.dictionary};
  }

  onInput(): void {
    setTimeout(() => {
      this.content = this.substituteSymbols(this.content);
    }, 200);
  }

  substituteSymbols(text: string): string {
    const replacement = text.replace(/not|and|or|then|iff|some|all|pos|nec/gi, match => {
      const symbol = this.dictionary[match.toLowerCase()];
      if (!symbol) { return match; }
      return symbol;
    });
    return replacement;
  }

  updateSymbols(): void {
    if (!this.content || !this.content.trim().length) { return; };
    Object.keys(this.currentDictionary).forEach(key => {
      if (this.currentDictionary[key] !== this.dictionary[key]){
        const symbolRegExp = new RegExp(this.currentDictionary[key], 'gi');
        this.content = this.content.replace(symbolRegExp, this.dictionary[key]);
        this.currentDictionary[key] = this.dictionary[key];
        return;
      }
    });
  }

  updateDictionary(): void {
    this.currentDictionary = {...this.dictionary};
  }

}
