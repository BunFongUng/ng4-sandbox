import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { YoutubeServiceService } from '../youtube-service.service';
@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  loading: boolean;
  data: object;
  query: string;
  constructor(private http: Http, private youtubeService: YoutubeServiceService) {
    this.query = 'cat';
    console.log( this.youtubeService.search(this.query));
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('https://jsonplaceholder.typicode.com/posts/2')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    }, (error: any) => {
      this.loading = false;
    }, () => {
      console.log('request completed');
    });
  }

  ngOnInit() {
  }

}
