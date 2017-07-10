import { Component, OnInit, ElementRef, Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../search-result';
import 'rxjs/add/operator/map';

export const YOUTUBE_API_KEY: string = 'AIzaSyB0J_xQmfnI9WP0ma3wyvaz7GAGgq6s5Qg';
export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
const loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

@Injectable()
export class YoutebeService {
  constructor(private http: Http, @Inject(YOUTUBE_API_KEY) private apiKey: string, @Inject(YOUTUBE_API_URL) private apiUrl: string) {

  }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl)
    .map((response: Response) => {
      return (<any>response.json()).items.map(item => {
        return new SearchResult({
          id: item.id,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnailUrl.high.url
        });
      });
    });
  }
}

export let YoutebeServiceInjectables: Array<any> = [
  { provide: YoutebeService, useClass: YoutebeService },
  { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
  { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];

@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBox implements OnInit {
  ngOnInit() {

  }
}

@Component({
  selector: 'app-you-tube-search-component',
  templateUrl: './you-tube-search-component.component.html',
  styleUrls: ['./you-tube-search-component.component.css']
})
export class YouTubeSearchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
