import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [TeamService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string
  memberToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
        this.memberId = urlParametersArray['id'];
    });
    this.memberToDisplay = this.teamService.getMembersById(this.memberId);
  }

}
