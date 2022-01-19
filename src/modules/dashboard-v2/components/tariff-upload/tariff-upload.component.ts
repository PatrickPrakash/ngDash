import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { environment } from 'src/environments/environment.prod';
import { TariffDetails } from 'src/modules/dashboard-v2/models/tariff-details';
import { TariffService } from 'src/modules/dashboard-v2/services/tariff.service';
import { TariffMockDetails } from 'src/modules/dashboard-v2/models/tariff-mock-data';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from 'src/modules/core/services/toast.service';

//Type of the data sheet
type AOA = TariffDetails[][];

@Component({
  selector: 'app-tariff-upload',
  templateUrl: './tariff-upload.component.html',
  styleUrls: ['./tariff-upload.component.scss'],
})
export class TariffUploadComponent implements OnInit {
  fileName: string = 'Drag file to Upload';
  sampleSheetLink = environment.sampleSheetLink;

  constructor(
    private tariffService: TariffService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  // Define the excel sheet data
  data: AOA = [[], []];
  value: any;
  sheetDataType = [
    'zone',
    'country',
    'network_operator',
    'network_code',
    'increment_type',
  ];

  onFileChange(event: any) {
    /* Intialize the file reader */
    const target: DataTransfer = <DataTransfer>event.target;

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const ab: ArrayBuffer = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(ab);

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = XLSX.utils.sheet_to_json(ws, {
        header: this.sheetDataType,
        range: 1, // Remove the header part
      });
      if (this.data.length == 0) {
        //Display a toast box to the user
        this.toastService.openSnackBar('Please upload a valid sheet');
      } else {
        this.fileName = event.target.files[0].name; //Update the file name in the fileDropdown box

        this.tariffService.updateData(this.data); // Update the data without header
      }
    };
    reader.readAsArrayBuffer(target.files[0]);
  }
}
