import { DeviceInfo } from "src/app/gps.service.data";

export class DeviceInfoMap {
  public deviceInfoMap : { [key:number]:DeviceInfo; }
  constructor(){
    this.deviceInfoMap={};
  }

  addDeviceInfo(id:number,deviceInfo:DeviceInfo){
    this.deviceInfoMap[id]=deviceInfo;
  }
}
