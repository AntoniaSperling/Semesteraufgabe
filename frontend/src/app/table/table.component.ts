import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'funktion', 'stunden', 'datum', 'beginn', 'ende'];

  dienste!: Dienst[];
  deleted = false;

  constructor(private bs: BackendService, private router: Router) {  }

  ngAfterViewInit(): void {
    this.readAll();
    //this.getAllDienste();
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

  delete(id: string): void {
    this.bs.deleteOne(id).subscribe(
      (
        response: any) => {
          console.log('response : ', response);
          if(response.status == 204){
                  console.log(response.status);
                  this.reload(true);
                } else {
                  console.log(response.status);
                  console.log(response.error);
                  this.reload(false);
                }
        },
        error => console.log(error)
      );
  }

  reload(deleted: boolean)
  {
    this.deleted = deleted;
    this.readAll();
    this.router.navigateByUrl('/table');
  }
}
