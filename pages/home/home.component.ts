import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: Boolean;
  form: FormGroup;
  typeOf: String;
  typeList: any[] = [];
  motivo: any[] = [];
  valueIn: any[] = [];

  constructor(private fb: FormBuilder) {
    this.typeOf = '-----'
    this.loading = false;
    this.form = this.fb.group(
      {
        type: [String, Validators.required],
        emitionDate: Date,
        paymentDate: Date,
        totalFacturado: Number,
        retencion: Number,
        motive: [],
        expressIn:[]
      })
  }

  ngOnInit(): void {
    this.typeList.push('FACTURA');
    this.typeList.push('BOLETA');
    this.typeList.push('RH');
    this.typeList.push('LETRA');
    this.motivo.push('DFJKD');
    this.motivo.push('FDFDSDS');
    this.valueIn.push('USD')
    this.valueIn.push('PEN')


    this.form.get('type')?.valueChanges.subscribe(data => {
      console.log(data);
      this.typeOf = data;
    })

  }

  typeNameChange(){
    const nameType = this.form.get('type');
    nameType?.valueChanges.forEach(
      (value: String) => this.typeOf = value
    )
  }

  saveData(): void{}

}
