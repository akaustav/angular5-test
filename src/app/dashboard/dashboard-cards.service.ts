import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DashboardCard } from './dashboard-card';

@Injectable()
export class DashboardCardsService {

  private _cards: BehaviorSubject<DashboardCard[]>;

  constructor() {
    this._cards = new BehaviorSubject<DashboardCard[]>([]);
  }

  public addCard(card: DashboardCard) {
    const curCards: DashboardCard[] = this._cards.getValue();
    const newCards: DashboardCard[] = curCards.concat(card);
    this._cards.next(newCards);
  }

  public removeCard(card: DashboardCard) {
    const curCards: DashboardCard[] = this._cards.getValue();
    const index: number = curCards.indexOf(card);
    if (index > -1) {
      curCards.splice(index, 1);
    }
    this._cards.next(curCards);
  }

  public get cards(): BehaviorSubject<DashboardCard[]> {
    return this._cards;
  }

}
