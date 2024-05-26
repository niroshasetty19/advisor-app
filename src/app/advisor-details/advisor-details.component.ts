import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advisor } from '../advisor.model';
import { AdvisorService } from '../advisor.service';

@Component({
  selector: 'app-advisor-details',
  templateUrl: './advisor-details.component.html',
  styleUrls: ['./advisor-details.component.css']
})
export class AdvisorDetailsComponent implements OnInit {
  advisor: Advisor | undefined;

  constructor(
    private route: ActivatedRoute,
    private advisorService: AdvisorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAdvisor();
  }

  getAdvisor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.advisorService.getAdvisor(id)
        .subscribe(
          advisor => this.advisor = advisor,
          error => {
            console.error('Error fetching advisor:', error);
            this.router.navigate(['/advisors']);
          }
        );
    }
  }

  deleteAdvisor() {
    if (this.advisor && confirm(`Are you sure you want to delete ${this.advisor.name}?`)) {
      this.advisorService.deleteAdvisor(this.advisor.id)
        .subscribe(
          () => this.router.navigate(['/advisors']),
          error => console.error('Error deleting advisor:', error)
        );
    }
  }
}
