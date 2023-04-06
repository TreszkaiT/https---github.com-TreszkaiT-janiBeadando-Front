import { Observable } from 'rxjs';
import {
  CityDataService,
  CityEntity,
  CityEntityAdd,
  CityEntityUpdate,
} from 'src/app/api/city';
import { ConfigService } from 'src/app/services/config.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CityDataServiceImpl extends CityDataService {
  public cityUrl: string = '';

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.cityUrl = this.config.get('apiUrl') + '/city'; // ez itt a server mappán belül lévő /city.json fájl neve/helye !!!!!!!!!!                                                       // már betöltéskor értesüljenek más Components-ek a változásról
  }

  public override add$(city: CityEntityAdd): Observable<CityEntity> {
    return this.http.post<CityEntity>(`${this.cityUrl}`, city);
  }

  public override get$(id: string): Observable<CityEntity | undefined> {
    return this.http.get<CityEntity>(this.cityUrl + '/' + id);
  }

  public list$(): Observable<CityEntity[]> {
    return this.http.get<CityEntity[]>(this.cityUrl + '/all');
  }

  public override update$(
    city: CityEntityUpdate
  ): Observable<CityEntityUpdate> {
    return this.http.patch<CityEntityUpdate>(
      `${this.cityUrl}/${city.id}`,
      city
    );
  }
}
