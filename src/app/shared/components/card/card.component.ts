import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ripple, initTE } from 'tw-elements';
import { Employe } from '../../../core/models/employe';
import { Store } from '@ngrx/store';
import { addEmployee } from '../../../ngrx/employe.action';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private store: Store<{ employe: Employe }>) {}

  @Input()
  employe!: Employe;

  @Output()
  delete: EventEmitter<any> = new EventEmitter<Employe>();

  onDelete(employe: Employe) {
    this.delete.emit(employe);
  }

  ngOnInit(): void {
    initTE({ Ripple });
  }

  addEmploye(employeValue: Employe) {
    this.store.dispatch(addEmployee({ newEmploye: employeValue }));
    this.delete.emit;
  }
}
