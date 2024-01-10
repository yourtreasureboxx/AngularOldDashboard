import { NgModule } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from "../app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { UsersComponent } from './dashboard/users/users.component';
import { MatTableModule } from "@angular/material/table";
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from "@angular/common";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        DashboardComponent,
        UsersComponent,
        AddUserComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        AppRoutingModule,
        FlexLayoutModule,
        MatDividerModule,
        MatTableModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatExpansionModule
    ]
})
export class AdminModule {

}