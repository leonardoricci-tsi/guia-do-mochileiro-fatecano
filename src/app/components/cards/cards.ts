import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cards.html',
  styleUrls: ['./cards.css']
})
export class CardItem {
  @Input() title!: string;
  @Input() link!: string;
  @Input() color: string = '#E5F5C9';   // cor de fundo (pastel)
}
