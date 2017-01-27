import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TeamService {

  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMembersById(memberId: string){
    return this.angularFire.database.object('/members/' + memberId);
  }

}
