import { Component } from '@angular/core';

import { SongPage } from '../song/song';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  songTab = SongPage;
  profileTab = ProfilePage;

  constructor() {

  }
}
