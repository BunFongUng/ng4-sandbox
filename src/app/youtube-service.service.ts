import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from './search-result';
import 'rxjs/add/operator/map';

// const loadingGif: string = ((<any>window).__karma__) ? '' : require('image/loading.gif');

@Injectable()
export class YoutubeServiceService {
  YOUTUBE_API_KEY: string = 'AIzaSyB0J_xQmfnI9WP0ma3wyvaz7GAGgq6s5Qg';
  YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
  constructor(private http: Http) {

  }

 search(query: string): Observable<SearchResult[]> {
    console.log(query);
    let params: string = [
      `q=${query}`,
      `key=${this.YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    let queryUrl: string = `${this.YOUTUBE_API_URL}?${params}`;

    return this.http.get(queryUrl)
      .map((response: Response) => {
        console.log(response.json());
        return (<any>response.json()).items.map(item => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }

  searchText(query: string): void {
    const params: string = [
      `q=${query}`,
      `key=${this.YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl: string = `${this.YOUTUBE_API_URL}?${params}`;

    this.http.get(queryUrl).map((response: Response) => {
      console.log(response.json());
    });
  }
}
