import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject, Observable, map } from 'rxjs';
import { TariffDetails } from 'src/modules/dashboard-v2/models/tariff-details';
import { networkOperator } from '../models/network-operator-data';
@Injectable({
  providedIn: 'root',
})
export class TariffService {
  tariffData = new ReplaySubject<TariffDetails[]>();
  networkData = new ReplaySubject<networkOperator>();

  // $tariffData = this.tariffData.asObservable();

  constructor() {}

  updateData(tariffData: any) {
    this.tariffData.next(tariffData);
  }

  getNetworkOpData(): ReplaySubject<networkOperator> {
    return this.networkData;
  }

  searchZone(zone: string) {
    return this.networkData.asObservable().pipe(
      map((data) => {
        const zoneDetails = data.zone_details.find(
          (zoneData) => zoneData.zoneName == zone
        );
        return zoneDetails ? zoneDetails.zoneName : '';
      })
    );
  }

  getNetworkDataObservable(): Observable<networkOperator> {
    return this.networkData.asObservable();
  }

  setNetworkOpData(networkData: networkOperator): void {
    this.networkData.next(networkData);
  }
}
