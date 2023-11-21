import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CardViewComponent } from './tab-content/card-view/card-view.component';
import { VideoPlayerComponent } from './tab-content/video-player/video-player.component';
import { GoogleMapsComponent } from './tab-content/google-maps/google-maps.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-toolbar color="primary">
      My deferred tabs!
      <mat-slide-toggle (toggleChange)="prefetchTabs.set(!prefetchTabs())">
        <span class="prefetch-slider">Prefetch tabs</span>
      </mat-slide-toggle>
    </mat-toolbar>
    <mat-tab-group (selectedIndexChange)="selectedTabIndex.set($event)">
      <mat-tab label="Welcome Tab"> Welcome to the initial tab! </mat-tab>
      <mat-tab label="My Card View">
        @defer(when selectedTabIndex() === 1; prefetch when prefetchTabs()) {
        <app-card-view />
        }
      </mat-tab>
      <mat-tab label="My Video Player">
        @defer(when selectedTabIndex() === 2; prefetch when prefetchTabs()) {
        <app-video-player id="DzXMkLCAPRE" />
        }
      </mat-tab>
      <mat-tab label="My Google Maps">
        @defer(when selectedTabIndex() === 3; prefetch when prefetchTabs()) {
        <app-google-maps />
        }
      </mat-tab>
    </mat-tab-group>
  `,
  styles: `
  
  mat-toolbar {
    justify-content: space-between;
  }

  .prefetch-slider {
    color: white;
  }
  
  `,
  imports: [
    MatToolbarModule,
    MatTabsModule,
    CardViewComponent,
    VideoPlayerComponent,
    GoogleMapsComponent,
    MatSlideToggleModule,
  ],
})
export class AppComponent {
  selectedTabIndex = signal(0);
  prefetchTabs = signal(false);
}
