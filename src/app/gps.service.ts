import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceInfo } from './gps.service.data';
import { DeviceInfoMap } from './gps.service.map';

const EventSource: any = window['EventSource'];

@Injectable({
  providedIn: 'root',
})
export class Sse {
  constructor(private zone: NgZone) {}
  observe(sseUrl: string): Observable<any> {
    return new Observable<any>(obs => {
      const es = new EventSource(sseUrl);
      es.onmessage = evt => {
        const data = JSON.parse(evt.data); // TODO handle parse error
        console.log(data);
        this.zone.run(() => obs.next(data));
      };
      return () => es.close();
    });
  }

  observeNext(sseUrl: string,deviceInfoMap: DeviceInfoMap){
    const es = new EventSource(sseUrl);
    es.onmessage = evt => {
      const data = JSON.parse(evt.data); // TODO handle parse error
      deviceInfoMap.addDeviceInfo(data.googleDeviceId,data);
    };
  }
}
