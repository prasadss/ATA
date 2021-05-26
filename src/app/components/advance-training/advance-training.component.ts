import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-advance-training',
  templateUrl: './advance-training.component.html',
  styleUrls: ['./advance-training.component.scss']
})
export class AdvanceTrainingComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }
  price = 11999
  ngOnInit(): void {
  }
  payWithRazor(){
    this.paymentService.pay(11999);
  } 

}
