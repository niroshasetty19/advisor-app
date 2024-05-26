import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Advisor } from '../advisor.model';
import { AdvisorService } from '../advisor.service';

@Component({
  selector: 'app-advisor-edit',
  templateUrl: './advisor-edit.component.html',
  styleUrls: ['./advisor-edit.component.css']
})
export class AdvisorEditComponent implements OnInit {
  advisorForm: FormGroup;
  advisor: Advisor | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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
    this.getAdvisor();
  }

  getAdvisor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.advisorService.getAdvisor(id)
        .subscribe(
          advisor => {
            this.advisor = advisor;
            this.advisorForm.patchValue({
              name: advisor.name,
              sin: advisor.sin,
              address: advisor.address,
              phone: advisor.phone
            });
          },
          error => {
            console.error('Error fetching advisor:', error);
            this.router.navigate(['/advisors']);
          }
        );
    }
  }

  onSubmit() {
    if (this.advisorForm.valid) {
      const updatedAdvisor = {
        ...this.advisor,
        ...this.advisorForm.value
      };
      this.advisorService.updateAdvisor(updatedAdvisor)
        .subscribe(
          () => {
            this.router.navigate(['/advisors', updatedAdvisor.id]);
          },
          error => console.error('Error updating advisor:', error)
        );
    }
  }
}
