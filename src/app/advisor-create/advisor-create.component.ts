import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdvisorService } from '../advisor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisor-create',
  templateUrl: './advisor-create.component.html',
  styleUrls: ['./advisor-create.component.css']
})
export class AdvisorCreateComponent implements OnInit {
  advisorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private advisorService: AdvisorService,
    private router: Router
  ) {
    this.advisorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      sin: ['', [Validators.required, Validators.pattern(/^\d{9}$/), Validators.maxLength(9), Validators.minLength(9)]],
      address: ['', Validators.maxLength(255)],
      phone: ['', [Validators.pattern(/^\d{8}$/), Validators.maxLength(8), Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.advisorForm.valid) {
      this.advisorService.createAdvisor(this.advisorForm.value)
        .subscribe(
          () => {
            this.router.navigate(['/advisors']);
          },
          error => console.error('Error creating advisor:', error)
        );
    }
  }
}
