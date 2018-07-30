import { Component, OnInit } from '@angular/core';

import { Version, DataService } from '../shared/data.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  version?: Version;

  constructor(private dataSvc: DataService) { }

  async ngOnInit(): Promise<void> {
    this.version = await this.dataSvc.getVersion();
  }
}

