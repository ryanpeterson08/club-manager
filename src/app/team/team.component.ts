import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService]
})
export class TeamComponent implements OnInit {

  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.members = this.teamService.getMembers();
  }

  goToDetailPage(clickedMember){
    this.router.navigate(['members', clickedMember.$key]);
  };

}
