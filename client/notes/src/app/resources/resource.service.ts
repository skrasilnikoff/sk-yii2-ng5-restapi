import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ResourceService {

  private _api_url: string;
  private _collection: string;

  constructor(private http: HttpClient) {
    this._api_url = 'http://api.sk-yii2-ng5-restapi/'; // <- set your rest api address
    this._collection = this.getCollection();
  }

  public getCollection() {
    return '';
  }

  public getAll() {
    return this.http.get(this._api_url + this._collection);
  }

  public getById(id) {
    return this.http.get(this._api_url + this._collection + '/' + id);
  }

  public save(entity) {
    if (entity.id !== undefined && entity.id > 0) {
      return this.update(entity);
    } else {
      return this.create(entity);
    }
  }

  public update(entity) {
    return this.http.put(this._api_url + this._collection + '/' + entity.id, entity, httpOptions);
  }

  public create(entity) {
    return this.http.post(this._api_url + this._collection, entity, httpOptions);
  }

  public delete(entity) {
    return this.http.delete(this._api_url + this._collection + '/' + entity.id);
  }
}
