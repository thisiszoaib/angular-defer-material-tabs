import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

type CardContent = {
  title: string;
  description: string;
  imageUrl: string;
};

@Component({
  selector: 'app-card-view',
  standalone: true,
  template: `
    <div class="responsive-grid">
      <mat-card *ngFor="let card of cards()">
        <mat-card-header>
          <mat-card-title>{{ card.title }} </mat-card-title>
        </mat-card-header>
        <br />
        <img mat-card-image [src]="card.imageUrl" />
        <mat-card-content>
          <br />
          <p>
            {{ card.description }}
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .responsive-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 24px;
      }
    `,
  ],
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule],
})
export class CardViewComponent {
  cards = signal<CardContent[]>([]);

  images = [
    'nature',
    'sky',
    'grass',
    'mountains',
    'rivers',
    'glacier',
    'forest',
    'streams',
    'rain',
    'clouds',
  ];

  constructor() {
    const cards: CardContent[] = [];
    for (let i = 0; i < this.images.length; i++) {
      cards.push({
        title: `Card ${i + 1}`,
        description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. `,
        imageUrl: `https://source.unsplash.com/random/500X500?${this.images[i]}`,
      });
    }

    this.cards.set(cards);
  }
}
