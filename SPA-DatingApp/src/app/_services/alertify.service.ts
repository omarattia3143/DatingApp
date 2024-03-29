import {Injectable} from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() {
  }

  confirm(message: string, okCallBack: () => any) {
    // tslint:disable-next-line:only-arrow-functions
    // @ts-ignore
    // tslint:disable-next-line:only-arrow-functions
    confirm(message, function(e) {
      if (e) {
        okCallBack();
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

}
