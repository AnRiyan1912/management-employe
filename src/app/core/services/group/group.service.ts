import { Injectable } from '@angular/core';
import { Group } from '../../models/group';
import dummyGroup from '../../../dummyData/dummyGroup.json';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  group: Array<Group> = dummyGroup;

  getAllGroup(): Array<Group> {
    return this.group;
  }
}
