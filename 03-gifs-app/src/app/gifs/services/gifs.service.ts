import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'g9pc7xJXR966nbDaSbQ5f5edVEmonjfj';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
    console.log('Gif');
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    // const resp = await fetch(
    //   'https://api.giphy.com/v1/gifs/search?api_key=g9pc7xJXR966nbDaSbQ5f5edVEmonjfj&q=valorant&limit=10'
    // );
    // const data = await resp.json();
    // console.log(data);

    // fetch(
    //   'https://api.giphy.com/v1/gifs/search?api_key=g9pc7xJXR966nbDaSbQ5f5edVEmonjfj&q=valorant&limit=10'
    // )
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));

    this.httpClient
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => (this.gifList = resp.data));
  }
}
