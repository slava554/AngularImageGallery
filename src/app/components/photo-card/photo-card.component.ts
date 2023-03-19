import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tst-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoCardComponent {
  @Input() id: string = "";
  
  protected src: string | null = null;

  ngOnInit(): void {
    this.src = `https://picsum.photos/seed/${this.id}/200/300`;
  }
}
