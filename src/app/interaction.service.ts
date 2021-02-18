import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private techerMessageSource= new Subject<string>();
  teacherMessage$=this.techerMessageSource.asObservable();

  constructor() { }

  sendMessage(message:string)
  {
    this.techerMessageSource.next(message);

  }
}
