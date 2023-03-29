import { Component } from '@angular/core';
import { GetdataService } from 'src/app/Common/getdata.service';
@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.css']
})
export class LoadDataComponent {
  gdata:any;
constructor (private getdata: GetdataService){
  getdata.Getdata().subscribe((data: any)=>{
    console.log(data);
    this.gdata=data;
  });
}
GetrecordID(name:any){
  alert(name)
}
}
