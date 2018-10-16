import { Component, OnInit } from '@angular/core';
import { Card } from '../card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: Card = {
    id:1,
    title: 'Sample Card',
    assignedTo: 'Briggs Victoria',
    startDate: new Date(),
    dueDate: null,
    description: 'This is a sample card',
    priority: 1,
    tags: ["WebDev"],
    boardColumn: "Developers",
    completed: false
  }

  constructor() { }

  ngOnInit() {
  }

}