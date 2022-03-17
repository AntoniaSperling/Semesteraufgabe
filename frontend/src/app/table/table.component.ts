import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableItem } from './table-datasource';
import { BackendService } from '../shared/backend.service';
import { Dienst } from '../shared/dienst';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  //dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'funktion', 'stunden', 'datum', 'beginn', 'ende'];

  dienste!: Dienst[];

  constructor(private bs: BackendService) {  }

  ngAfterViewInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.bs.getAll().subscribe(
    (
      response: Dienst[]) => {
              this.dienste = response;
              console.log(this.dienste);
              return this.dienste;
      },
      error => console.log(error)
    );
  }
}
