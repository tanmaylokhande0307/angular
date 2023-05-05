import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-four.component.html',
  styleUrls: ['./screen-four.component.css'],
})
export class ScreenFourComponent {
  public productsData: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllProducts().subscribe((res) => {
      this.productsData = res
      console.log(res)
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
