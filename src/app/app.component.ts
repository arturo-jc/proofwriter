import { Component, OnInit, ViewChild } from '@angular/core';
import { TextBoxComponent } from './text-box/text-box.component';

interface Operator {
  name: string;
  abbreviation: string;
  symbols: string[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('textBox') textBox: TextBoxComponent;

  // SETTINGS
  updateAfterSelect = true;

  operators: Operator[] = [
    {
      name: 'negation',
      abbreviation: 'not',
      symbols: ['¬', '˜', '!']
    },
    {
      name: 'conjunction',
      abbreviation: 'and',
      symbols: ['· ', '∧ ', '& ']
    },
    {
      name: 'disjunction',
      abbreviation: 'or',
      symbols: ['∨ ', '∥ ']
    },
    {
      name: 'implication',
      abbreviation: 'then',
      symbols: ['⊃ ', '→ ']
    },
    {
      name: 'equivalence',
      abbreviation: 'iff',
      symbols: ['≡ ','↔ ']
    },
    {
      name: 'universal quantifier',
      abbreviation: 'all',
      symbols: ['∀']
    },
    {
      name: 'existential quantifier',
      abbreviation: 'some',
      symbols: ['∃']
    },
    {
      name: 'box operator',
      abbreviation: 'nec',
      symbols: ['□ ']
    },
    {
      name: 'diamond operator',
      abbreviation: 'pos',
      symbols: ['◇ ']
    },
  ];

  dictionary = {};

  currentDate = Date.now();

  ngOnInit(): void {
    this.operators.forEach(operator => {
      this.dictionary[operator.abbreviation] = operator.symbols[0];
    })
  }

  onSymbolSelect(){
    if (this.updateAfterSelect){
      this.textBox.updateSymbols();
    }
  }

  // Update textbox's current dictionary if settings change
}
