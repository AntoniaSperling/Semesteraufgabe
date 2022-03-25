import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Dienst } from '../shared/dienst';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string = '';
  dienst!: Dienst;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private bs: BackendService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router) { 
      this.form = this.fb.group(
        {
          funktionControl: ['', Validators.required],
          stundenControl: ['', Validators.required],
          datumControl: ['', Validators.required],
          beginnControl: ['', Validators.required],
          endeControl: ['', Validators.required]
        }
      );
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readOne(id: string): void {
    this.bs.getOne(id).subscribe(
    (
      response: Dienst) => {
              this.dienst = response;
              console.log(this.dienst);

              this.form.patchValue({
                funktionControl: this.dienst?.funktion,
                stundenControl: this.dienst?.stunden,
                datumControl: this.dienst?.datum,
                beginnControl: this.dienst?.beginn,
                endeControl: this.dienst?.ende
              });

              return this.dienst;
      },
      error => console.log(error)
    );
}

update(): void {
  const values = this.form.value;
  this.dienst.funktion = values.funktionControl;
  this.dienst.stunden = values.stundenControl;
  this.dienst.datum = values.datumControl;
  this.dienst.beginn = values.beginnControl;
  this.dienst.ende = values.endeControl;
  this.bs.update(this.id, this.dienst)
    .subscribe(
      response => {
        console.log(response);
        console.log(response._id);
      },
      error => {
        console.log(error);
      }
    );
  this.router.navigateByUrl('/table');
}

cancel(): void {
  this.location.back();
}

}
