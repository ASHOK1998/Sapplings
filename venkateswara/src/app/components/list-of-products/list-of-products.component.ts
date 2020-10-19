import { Component, OnInit } from "@angular/core";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-list-of-products",
  templateUrl: "./list-of-products.component.html",
  styleUrls: ["./list-of-products.component.css"]
})
export class ListOfProductsComponent implements OnInit {
  faSearch = faSearch;
  faPlus = faPlus;
  constructor() {}

  ngOnInit() {}
}
