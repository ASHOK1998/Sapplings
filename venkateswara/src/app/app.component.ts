import { Component } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { from } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  faCoffee = faCoffee;
  date: Date;

  constructor() {
    this.date = new Date();
  }
}