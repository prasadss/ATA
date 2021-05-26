import { Injectable } from '@angular/core';
import { WindowRefService } from '../window-ref.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private winRef: WindowRefService,) { }

  pay(price){
    const options: any = {
      key: 'rzp_live_fuxbb9xUfXfYgj',
      amount: price*100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: './assets/img/logo.png', // company logo or product image
       // order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: "rgb(105, 189, 81);"
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }
}
