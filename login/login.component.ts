import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  ingress(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'sebas@gmail.com' && password == '123456'){
      //TODO:
      this.acces();
      this.fakeLoading();
    }
    else {
      this.error();
    }
  }

  error(){
    this._snackBar.open('usuario o contraseña ingresados son invalidos','',{duration:3000,horizontalPosition : 'center', verticalPosition:'bottom'})
  }

  acces(){
    this._snackBar.open('Credenciales correctas. Bienvenido Financiero!','',{duration:3000,horizontalPosition : 'center', verticalPosition:'bottom'})

  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['main']).then(r => console.log("salads"));
    }, 1500)
  }
}
