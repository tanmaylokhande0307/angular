import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './screen-one.component.html',
})
export class ScreenOneComponent {
  public rowData: any[] = [];

  colDefs: ColDef[] = [
    { headerName: 'Category', field: 'category' },
    { headerName: 'Description', field: 'description' },
    { field: 'title' },
    { field: 'description' },
    { headerName: 'Rating', field: 'rating.rate' },
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllProducts().subscribe((res) => {
      this.rowData = res;
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
