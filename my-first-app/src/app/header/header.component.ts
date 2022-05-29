import { Component, OnInit } from '@angular/core';
import {HeaderTab} from "./header-tab";

@Component({
  selector: 'pinta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tabs: HeaderTab[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tabs.push(new HeaderTab("PINTA", true));
    this.tabs.push(new HeaderTab("Funzioni", false));
    this.tabs.push(new HeaderTab("Prezzi",false));
    this.tabs.push(new HeaderTab("Disabilitato", false, true));
  }

  selectTab(i: number) {
    for (const tab of this.tabs) {
      tab.active = false;
    }
    this.tabs[i].active = true;
  }
}
