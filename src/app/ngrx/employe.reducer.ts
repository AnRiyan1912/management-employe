import { createReducer, on } from '@ngrx/store';
import { Employe } from '../core/models/employe';
import { addEmployee, resetEmployee } from './employe.action';

export interface EmployeState {
  employe: Employe;
}

export const initialState: EmployeState = {
  employe: {
    username: '',
    firtsName: '',
    lastName: '',
    email: '',
    birthDate: '',
    basicSalary: '',
    status: '',
    group: '',
  },
};

export const employeReducer = createReducer(
  initialState,
  on(addEmployee, (state, { newEmploye }) => ({
    ...state,
    employe: newEmploye,
  })),
  on(resetEmployee, (state) => initialState)
);
