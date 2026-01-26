import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

export interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-checkout-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.css',
})
export class CheckoutFormComponent {
  @Output() formSubmit = new EventEmitter<CheckoutFormData>();
  
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      paymentMethod: ['card', Validators.required]
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.formSubmit.emit(this.checkoutForm.value);
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.checkoutForm.controls).forEach(key => {
      this.checkoutForm.get(key)?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string | null {
    const field = this.checkoutForm.get(fieldName);
    if (field?.touched && field?.errors) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} is too short`;
      }
    }
    return null;
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Name',
      email: 'Email',
      address: 'Address',
      paymentMethod: 'Payment Method'
    };
    return labels[fieldName] || fieldName;
  }
}
