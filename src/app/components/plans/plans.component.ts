import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../window-ref.service';
import { PaymentService} from '../../services/payment.service'
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  constructor(private paymentService: PaymentService) {}
  price = 3999;
  selected = 1;
  ngOnInit(): void {
  }

  payWithRazor() {
    this.paymentService.pay(this.price)
  }

}
