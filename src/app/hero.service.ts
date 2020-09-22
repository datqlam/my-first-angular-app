import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

/**When you provide the service at the root level, Angular creates a single,
 * shared instance of HeroService and injects into any class that asks for it.  */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes () : Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
