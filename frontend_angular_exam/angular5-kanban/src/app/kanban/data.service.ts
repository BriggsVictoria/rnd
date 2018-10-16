import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DayPilot} from "daypilot-pro-angular";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  cards: any[] = [
    {id: 1, "name": "Task 1", column: "1", text: "This is a description of task #1."},
    {id: 2, "name": "Task 2", column: "1", text: "This is a description of task #2.", barColor: "#1155CC"},
    {id: 3, "name": "Task 3", column: "1", text: "This is a description of task #3.", barColor: "#999"},
    {id: 4, "name": "Task 4", column: "1", text: "This is a description of task #4.", barColor: "#6AA84F"},
    {id: 5, "name": "Task 5", column: "2", text: "This is a description of task #5.", barColor: "#F6B26B"},
  ];

  columns: any[] = [
    {name: "Analysis", id: "1"},
    {name: "Draft", id: "2"},
    {name: "Testing", id: "3"}
  ];

  firstOfMonth(): DayPilot.Date {
    return DayPilot.Date.today().firstDayOfMonth();
  }

  constructor(private http : HttpClient){
  }

  getCards(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.cards);
      }, 200);
    });

    // return this.http.get("/api/tasks");
  }

  getColumns(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.columns);
      }, 200);
    });
  }
}
