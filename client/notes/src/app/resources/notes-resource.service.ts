import {Injectable} from '@angular/core';
import {ResourceService} from './resource.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class NotesService extends ResourceService {

  constructor(http: HttpClient, private _r: ResourceService) {
    super(http);
  }

  public getCollection() {
    return 'notes';
  }

}
