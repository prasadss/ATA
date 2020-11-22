import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../window-ref.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  constructor(private winRef: WindowRefService) {}
  price = 3999;
  selected = 1;
  ngOnInit(): void {
  }

  payWithRazor() {
    const options: any = {
      key: 'rzp_live_fuxbb9xUfXfYgj',
      amount: this.price*100, // amount should be in paise format to display Rs 1255 without decimal point
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
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    debugger;
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

}
