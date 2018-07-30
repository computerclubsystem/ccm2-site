import { Component, OnInit } from '@angular/core';

import { DataService, Version } from '../shared/data.service';

@Component({
  templateUrl: './download.component.html'
})
export class DownloadComponent implements OnInit {
  version?: Version;

  constructor(private dataSvc: DataService) { }

  async ngOnInit(): Promise<void> {
    this.version = await this.dataSvc.getVersion();
  }
}
