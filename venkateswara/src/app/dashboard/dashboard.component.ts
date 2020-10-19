import { Component, OnInit } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { from } from "rxjs";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  faCoffee = faCoffee;
  date: Date;

  constructor() {
    this.date = new Date();
  }

  ngOnInit() {}
}
