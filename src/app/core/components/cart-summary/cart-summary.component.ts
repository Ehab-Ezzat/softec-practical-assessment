import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CartService} from "../../services/cart.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'cart-summary',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart-summary.component.html',
  styles: []
})
export class CartSummaryComponent implements OnInit {
  @Output() formData = new EventEmitter();
  cartService = inject(CartService)
  userService = inject(UsersService)
  allUsers$ = this.userService.getAllUsers();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      paymentMethod: ['cash', Validators.required],
      userId: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.formData.emit(this.form)
    this.form.valueChanges.subscribe(() => {
      this.formData.emit(this.form)
    })
  }

  get f() {
    return this.form.controls
  }
}
