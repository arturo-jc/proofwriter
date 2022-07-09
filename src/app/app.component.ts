import { Component, OnInit } from '@angular/core';

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
      symbols: ['∨ ', '+ ', '∥ ']
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
    }
  ];

  dictionary = {};

  ngOnInit(): void {
    this.operators.forEach(operator => {
      this.dictionary[operator.abbreviation] = operator.symbols[0];
    })
  }
}
