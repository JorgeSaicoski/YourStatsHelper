import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  private backendUrl = `${environment.api_url}`
  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.http.get(this.backendUrl).subscribe(
      (data) => {
        console.log(data); // Handle the response data here
      },
      (error) => {
        console.error(error); // Handle errors here
      }
    );
  }

}
