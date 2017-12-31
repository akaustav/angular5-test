import { Component, OnInit } from '@angular/core';
import { DashboardCard, InputToken, InputProperty } from './dashboard-card';
import { DashboardCardsService } from './dashboard-cards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cards: DashboardCard[];

  constructor(private cardsService: DashboardCardsService) {
    this.cards = [];

    this.cardsService.cards.subscribe((cards: DashboardCard[]) => {
      this.cards = cards;
    });
  }

  ngOnInit() {
    this.createCards();
  }

  public createCards(): void {
    const metadata = DashboardCard.metadata;

    this.cardsService.addCard(
      new DashboardCard(
        new InputToken(
          new InputProperty(metadata.NAME, 'users'),
          new InputProperty(metadata.ROUTERLINK, '/dashboard/users'),
          new InputProperty(metadata.ICONCLASS, 'fa-users'),
          new InputProperty(metadata.COLOR, 'blue')
        ),
        DashboardUsersComponent
      )
    );
  }

}
