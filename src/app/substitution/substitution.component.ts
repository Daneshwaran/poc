import { Component, OnInit } from '@angular/core';

const SUBSTITUTION_DATA: any[] = [
  {number: 1, from: '1/4/2019', to: '1/5/2019', role: 'IT Service Owner'},
  {number: 2, from: '1/5/2019', to: '1/6/2019', role: 'IT Project Owner'},
  {number: 3, from: '1/6/2019', to: '1/7/2019', role: 'Supplier Service Owner'},
  {number: 4, from: '1/7/2019', to: '1/8/2019', role: 'HRBP head'},
];
@Component({
  selector: 'app-substitution',
  templateUrl: './substitution.component.html',
  styleUrls: ['./substitution.component.scss']
})


export class SubstitutionComponent implements OnInit {
  displayedColumns: string[] = ['number', 'from', 'to', 'role'];
  dataSource = SUBSTITUTION_DATA;
  constructor() { }

  ngOnInit() {
  }

}


