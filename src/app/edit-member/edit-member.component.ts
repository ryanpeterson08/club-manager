import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [TeamService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.teamService.updateMember(memberToUpdate);
  }

}
