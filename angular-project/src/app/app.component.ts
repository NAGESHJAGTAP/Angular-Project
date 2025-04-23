// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'angular-project';
//   users: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
//       .subscribe((data) => {
//         this.users = data;
//       });
//   }
// }




import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  users: any[] = [];

  newUser = {
    name: '',
    username: '',
    email: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.users = data;
      });
  }

  addUser() {
    const apiUrl = 'http://localhost:3000/api/pharmacies';
    this.http.post(apiUrl, this.newUser).subscribe((res: any) => {
      alert('User added successfully to local API');
      this.users.unshift(res); 
      this.newUser = { name: '', username: '', email: '' }; 
    }, (error) => {
      console.error('Error adding user:', error);
      alert('Failed to add user. Check your API server.');
    });
  }
}
