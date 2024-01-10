import { Injectable } from "@angular/core";
import { User } from "./dashboard/users/user.model";
import { HttpClient } from '@angular/common/http';
import { Post } from "./dashboard/postData.model";
import { map } from "rxjs/operators";

@Injectable(
    {
        providedIn:'root'
    }
)
export class AdminService{

    constructor (private readonly http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>('https://mydashboard-af983-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData => {
            const postsArray: Post[] = [];
            for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                postsArray.push( { ...responseData[key] } );
                }
            }
            return postsArray
            }));
    }

    addUser(data: Post ) {
        return this.http.post('https://mydashboard-af983-default-rtdb.firebaseio.com/posts.json',data, {
            observe: 'response'
        }
        ).subscribe( responseData => {
        console.log(responseData);
        });
    }
}