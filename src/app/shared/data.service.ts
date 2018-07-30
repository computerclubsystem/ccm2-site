import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {
  private baseApiUrl = 'https://us-central1-ccm2-site.cloudfunctions.net/';
  private version?: Version;

  constructor(private http: HttpClient) { }

  async getVersion(): Promise<Version> {
    if (this.version) {
      return Promise.resolve(this.version);
    }
    this.version = await this.http.get<Version>(this.getFunctionUrl('version')).toPromise();
    return this.version;
  }

  private getFunctionUrl(functionName: string): string {
    return this.baseApiUrl + functionName;
  }
}

export interface Version {
  value: string;
  code: string;
}
