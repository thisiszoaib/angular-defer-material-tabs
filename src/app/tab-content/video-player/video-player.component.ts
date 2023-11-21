import { Component, Input, inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayerModule],
  template: `
    @if(apiLoaded()) {
    <youtube-player
      [playerVars]="{ autoplay: 1 }"
      [width]="400"
      [height]="250"
      [videoId]="id"
    />
    }
  `,
  styles: ``,
})
export class VideoPlayerComponent {
  @Input({ required: true })
  id!: string;

  apiLoaded = inject(YoutubeService).apiLoaded;
}
