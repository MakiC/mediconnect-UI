import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  public sidebarCollapsed = new BehaviorSubject<boolean>(false);

  constructor() { }
}
