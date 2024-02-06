import { createAction, props } from '@ngrx/store';
import { Employe } from '../core/models/employe';

export const addEmployee = createAction(
  '[Employe] Add Employee',
  props<{ newEmploye: Employe }>()
);
export const resetEmployee = createAction('[Employe Employe] resetEmployee');
