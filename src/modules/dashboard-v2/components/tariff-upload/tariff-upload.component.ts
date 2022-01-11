import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { environment } from 'src/environments/environment.prod';

//Type of the data sheet
type AOA = any[][];

@Component({
  selector: 'app-tariff-upload',
  templateUrl: './tariff-upload.component.html',
  styleUrls: ['./tariff-upload.component.scss'],
})
export class TariffUploadComponent implements OnInit {
  fileName: string = 'Drag file to Upload';
  sampleSheetLink = environment.sampleSheetLink;
  constructor() {}

  ngOnInit(): void {}

  // Define the excel sheet data
  data: AOA = [[], []];
  value: any;

  onFileChange(event: any) {
    this.fileName = event.target.files[0].name;

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
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
    };
    reader.readAsArrayBuffer(target.files[0]);
  }
}
