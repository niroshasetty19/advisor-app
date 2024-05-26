import { Component, OnInit } from '@angular/core';
import { Advisor } from '../advisor.model';
import { AdvisorService } from '../advisor.service';

@Component({
  selector: 'app-advisor-list',
  templateUrl: './advisor-list.component.html',
  styleUrls: ['./advisor-list.component.css']
})
export class AdvisorListComponent implements OnInit {
  advisors: Advisor[] = [];

  constructor(private advisorService: AdvisorService) { }

  ngOnInit() {
    this.getAdvisors();
  }

  getAdvisors() {
    this.advisorService.getAdvisors()
      .subscribe(
        advisors => this.advisors = advisors,
        error => console.error('Error fetching advisors:', error)
      );
  }

  deleteAdvisor(advisor: Advisor) {
    if (confirm(`Are you sure you want to delete ${advisor.name}?`)) {
      this.advisorService.deleteAdvisor(advisor.id)
        .subscribe(
          () => {
            this.advisors = this.advisors.filter(a => a.id !== advisor.id);
          },
          error => console.error('Error deleting advisor:', error)
        );
    }
  }
}
