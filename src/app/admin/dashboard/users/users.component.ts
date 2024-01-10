import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  constructor (private adminService: AdminService) {}
  users: User[] = [];
  allColumns:  string[] = ['id', 'userName', 'address','email', 'actions']
  dataSource = new MatTableDataSource<User>();
  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnInit(): void {
    this.adminService.getUsers().subscribe((data: User[] ) => {
      this.dataSource.data= data;
      this.dataSource.paginator = this.paginator;
      this.users=data;
    });
  }
}