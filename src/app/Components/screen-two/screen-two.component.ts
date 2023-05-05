import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.css'],
})
export class ScreenTwoComponent {
  public categoryData: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllCategories().subscribe((res) => {
      this.categoryData = res
    });

  }

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  clearSelection() {
    this.agGrid.api.deselectAll();
  }
}
