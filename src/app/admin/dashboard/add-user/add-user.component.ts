import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Post } from '../postData.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})

export class AddUserComponent {

  constructor( private adminService: AdminService) {}

  @ViewChild('f', { static: false }) data!: NgForm;
  user = {
    id: '',
    userName: '',
    email: '',
    address: ''
  };

  postData!: Post;

  onSubmit() {
    console.log(this.data.form);
    const myData = this.data.form.value;
    this.user.id='6';
    this.user.userName = myData.fname +' '+ myData.lname;
    this.user.email = myData.userData.email;
    this.user.address = myData.address;
    this.postData = this.user;
    this.adminService.addUser(this.postData);
    this.data.resetForm();
  }

  onClear() {
    this.data.resetForm();
  }
}
