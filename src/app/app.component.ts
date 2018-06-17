import { Component } from '@angular/core';
import { Sse } from './gps.service';
import { DeviceInfoMap } from './gps.service.map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sse: Sse){
    this.deviceInfoMap=new DeviceInfoMap();
    sse.observeNext(this.deviceEventUrl,this.deviceInfoMap);
  }
  deviceInfoMap: DeviceInfoMap;
  deviceEventUrl: string = 'http://192.168.0.147:8080/devices/location'
  title: string = 'Equipment DashBoard';
  lat: number = 1.3924099;
  lng: number = 103.8895071;

}
