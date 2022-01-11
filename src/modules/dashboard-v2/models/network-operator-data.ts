import { zoneDetails } from './zone-details';

export interface networkOperator {
  network_operator: string;
  zone_details: zoneDetails[];
}
