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
      abbreviation: 'NOT',
      symbols: ['¬', '˜', '!']
    },
    {
      name: 'conjunction',
      abbreviation: 'AND',
      symbols: ['· ', '∧ ', '& ']
    },
    {
      name: 'disjunction',
      abbreviation: 'OR',
      symbols: ['∨ ', '+ ', '∥ ']
    },
    {
      name: 'implication',
      abbreviation: 'THEN',
      symbols: ['⊃ ', '→ ']
    },
    {
      name: 'equivalence',
      abbreviation: 'IFF',
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
