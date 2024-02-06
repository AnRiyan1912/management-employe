import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { EmployeService } from '../../core/services/employe/employe.service';
import { Employe } from '../../core/models/employe';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-list-employe',
  standalone: true,
  imports: [CardComponent, CommonModule, PaginationComponent],
  templateUrl: './list-employe.component.html',
  styleUrl: './list-employe.component.css',
})
export class ListEmployeComponent implements OnInit {
  listEmployes: Array<Employe> = [];

  page: number = 1;
  searchUsernameOrFirstName: string = '';
  valueNavigate: string = '';

  constructor(private services: EmployeService) {}

  ngOnInit() {
    this.loadEmployes();
  }

  loadEmployes(): void {
    this.listEmployes = this.services.getAllEmployes(
      this.page,
      this.searchUsernameOrFirstName
    );
  }

  setPageAndSearchValue(page: number, searchValue: string): void {
    this.page = page;
    this.searchUsernameOrFirstName = searchValue;
    this.loadEmployes();
  }

  setPage(page: number): void {
    this.page = page;
    this.loadEmployes();
  }

  deleteEmploye(employe: Employe): void {
    this.services.deleteEmploye(employe);
    this.loadEmployes();
  }

  setNavigate(value: string): void {
    this.valueNavigate = value;
  }
}
