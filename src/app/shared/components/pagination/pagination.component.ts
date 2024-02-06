import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  currentPage: number = 1;

  @Input() totalEmploye: number = 0;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  onNextPage(): void {
    this.currentPage++;
    this.pageChange.emit(this.currentPage);
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
