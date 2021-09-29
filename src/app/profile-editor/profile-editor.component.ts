import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  products = [1,2,3,4];

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

});

onSubmit(){
  console.warn(this.profileForm.value)
}
Onalert(){
  alert("hello");
  this.products.push(11);
}

}
