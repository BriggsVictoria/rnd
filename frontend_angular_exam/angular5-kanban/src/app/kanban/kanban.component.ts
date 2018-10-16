import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {DayPilot, DayPilotKanbanComponent} from "daypilot-pro-angular";
import {DataService} from "./data.service";{}

@Component({
  selector: 'kanban-component',
  template: `<daypilot-kanban [config]="config" #kanban></daypilot-kanban>`,
  styles: [``]
})
export class KanbanComponent implements AfterViewInit {

  @ViewChild("kanban")
  kanban: DayPilotKanbanComponent;

  config: any = {
    columnWidthSpec: "Auto",
  };

  constructor(private ds: DataService) {
  }

  ngAfterViewInit(): void {
    this.ds.getColumns().subscribe(result => this.config.columns = result);
    this.ds.getCards().subscribe(result => this.config.cards = result);
  }

}

