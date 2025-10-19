import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CardItem } from '../cards/cards';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar, CardItem],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
