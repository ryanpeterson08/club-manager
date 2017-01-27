import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeamService]
})
export class AdminComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  submitForm(name: string, position: string){
    var newMember: Team = new Team(name, position);
    this.teamService.addMember(newMember);
  }

}
