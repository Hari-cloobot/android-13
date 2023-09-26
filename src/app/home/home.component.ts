import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {

      console.log('Form submitted with the following values:', this.myForm.value);
      this.myForm.reset();
    } else {
      Object.keys(this.myForm.controls).forEach((field) => {
        const control = this.myForm.get(field);
        if (control?.invalid) {
          if (field === 'name') {
          } else if (field === 'email') {
          } else if (field === 'message') {
            
          }
        }
      });
    }
  }
}
