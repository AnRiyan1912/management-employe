import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../../core/models/employe';
import { Store, select } from '@ngrx/store';
import { EmployeState } from '../../ngrx/employe.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-employe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-employe.component.html',
  styleUrl: './detail-employe.component.css',
})
export class DetailEmployeComponent implements OnInit {
  employe$!: Observable<Employe>;

  constructor(private store: Store<EmployeState>) {}
  ngOnInit(): void {
    this.employe$ = this.store.pipe(select('employe'));
  }
}
