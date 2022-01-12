import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { TariffDetails } from 'src/modules/dashboard-v2/models/tariff-details';
@Injectable({
  providedIn: 'root',
})
export class TariffService {
  tariffData = new BehaviorSubject<TariffDetails[]>([
    {
      zone: '',
      country: '',
      network_operator: '',
      network_code: 0,
      increment_type: '',
    },
  ]);
  $tariffData = this.tariffData.asObservable();

  constructor() {}


  updateData(tariffData: any) {
    this.tariffData.next(tariffData);
  }
}
