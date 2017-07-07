import { Injectable } from '@angular/core';
export let YOUTUBE_API_KEY: string = 'AIzaSyB0J_xQmfnI9WP0ma3wyvaz7GAGgq6s5Qg';
export let YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
const loadingGif: string = ((<any>window).__karma__) ? '' : require('image/loading.gif');

@Injectable()
export class YoutubeServiceService {

  constructor() { }

}
