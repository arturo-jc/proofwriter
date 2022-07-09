import { Component, OnInit } from '@angular/core';

interface Operator {
  name: string;
  abbreviation: string;
  options: string[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'logic-shortcuts';

  operators: Operator[] = [
    {
      name: 'negation',
      abbreviation: 'NOT',
      options: ['¬', '˜', '!']
    },
    {
      name: 'conjunction',
      abbreviation: 'AND',
      options: ['· ', '∧ ', '& ']
    },
    {
      name: 'disjunction',
      abbreviation: 'OR',
      options: ['∨ ', '+ ', '∥ ']
    },
    {
      name: 'implication',
      abbreviation: 'THEN',
      options: ['⊃ ', '→ ']
    },
    {
      name: 'equivalence',
      abbreviation: 'IFF',
      options: ['≡ ','↔ ']
    }
  ]

  dictionary = {};
  cols;

  ngOnInit(): void {
    this.operators.forEach(operator => {
      this.dictionary[operator.abbreviation] = operator.options[0];
    })
  }
}
