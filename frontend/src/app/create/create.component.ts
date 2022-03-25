import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Dienst } from '../shared/dienst';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  dienst!: Dienst;
  form: FormGroup;
  constructor(private route: ActivatedRoute,
    private bs: BackendService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router) { 
      this.form = this.fb.group(
        {
          idControl: ['', Validators.required],
          funktionControl: ['', Validators.required],
          stundenControl: ['', Validators.required],
          datumControl: ['', Validators.required],
          beginnControl: ['', Validators.required],
          endeControl: ['', Validators.required]
        });
      }

  ngOnInit(): void {
  }

  create(): void {
    const values = this.form.value;
    this.dienst = {
      _id: values.idControl,
    funktion: values.funktionControl,
    stunden: values.stundenControl,
    datum: values.datumControl,
    beginn: values.beginnControl,
    ende: values.endeControl,
    };
  this.bs.create(this.dienst)
    .subscribe(
      response => {
        console.log(response);
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
