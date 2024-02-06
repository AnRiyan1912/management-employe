import { Injectable } from '@angular/core';
import dummyEmploye from '../../../dummyData/dummyEmploye.json';
import { Employe } from '../../models/employe';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  employes: Array<Employe> = dummyEmploye;
  itemsPerpage: number = 10;

  getAllEmployes(
    page: number = 0,
    usernameOrFirstName: string
  ): Array<Employe> {
    const startIndex = (page - 1) * this.itemsPerpage;
    const endIndex = startIndex + this.itemsPerpage;
    if (usernameOrFirstName.length > 0) {
      let tempEployeSearch: Array<Employe> = [];
      this.employes.forEach((employe) => {
        if (
          employe.firtsName.toLowerCase == usernameOrFirstName.toLowerCase ||
          employe.username.toLowerCase == usernameOrFirstName.toLowerCase
        ) {
          tempEployeSearch.push(employe);
        }
      });
      return tempEployeSearch.slice(startIndex, endIndex);
    }
    return this.employes.slice(startIndex, endIndex);
  }
  addEmploye(employe: Employe): void {
    this.employes.push(employe);
  }
  getEmployeByUsername(username: string): Employe | undefined {
    return this.employes.find((employe) => employe.username === username);
  }
  updateEmploye(employe: Employe): void {
    const findEmployeIndex = this.employes.findIndex(
      (prevEmploye) => prevEmploye.username === employe.username
    );
    this.employes[findEmployeIndex] = employe;
  }
  deleteEmploye(employe: Employe): void {
    const findIndex = this.employes.findIndex(
      (prevEmploye) => prevEmploye.username === employe.username
    );
    this.employes.splice(findIndex, 1);
  }
}
