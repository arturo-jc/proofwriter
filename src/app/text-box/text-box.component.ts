import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  content: string;
  @Input() dictionary;
  @Input() caseInsensitive: boolean;
  currentDictionary;

  constructor(
    private clipboard: Clipboard,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.currentDictionary = {...this.dictionary};
  }

  onInput(): void {
    setTimeout(() => {
      this.content = this.substituteSymbols(this.content);
    }, 200);
  }

  substituteSymbols(text: string): string {
    const replacement = text.replace(/not|and|or|then|iff|some|all|pos|nec|tfr/gi, match => {
      const symbol = this.caseInsensitive? this.dictionary[match.toLowerCase()]: this.dictionary[match];
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

  copyContent() {
    if (!this.content || !this.content.trim().length) { return; };
    this.clipboard.copy(this.content);
    this.messageService.add({
      severity: 'success',
      summary: 'Copied',
      detail: 'Proof copied to clipboard.'
    });
  }

  resetContent() {
    this.content = '';
  }

}
