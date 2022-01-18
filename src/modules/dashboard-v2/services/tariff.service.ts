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

  getTariffData(): Observable<TariffDetails[]> {
    return this.tariffData.asObservable();
  }

  getNetworkCodes(): Observable<any> {
    return this.tariffData.asObservable().pipe(
      map((data) => {
        return data.map((tariffData: TariffDetails) => tariffData.network_code);
      })
    );
  }

  isNetworkCodeDuplicate(networkCode: any) {
    let result = false;
    result = networkCode.some((element: any, index: any) => {
      return networkCode.indexOf(element) !== index;
    });
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  isNetworkCodeCheckDuplicate(networkCode: any, networkArray: any) {
    console.log('Consoling the network Array');

    console.log(networkArray);

    return networkArray.includes(networkCode);
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

  getNetworkCodeDuplicates() {
    let networkCodes: any = [];
    let duplicateCodes: any = [];
    this.tariffData.subscribe((data) => {
      data.forEach((element) => {
        networkCodes.push(element.network_code);
      });
    });

    duplicateCodes = Array.from(
      new Set(
        networkCodes.filter((value: any, index: any, self: string | any[]) => {
          return self.indexOf(value) !== index;
        })
      )
    );

    return duplicateCodes;
  }
}
