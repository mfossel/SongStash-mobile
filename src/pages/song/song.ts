import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RecorderProvider, RecorderState }  from '../../providers/recorder/recorder';

@Component({
  selector: 'page-song',
  templateUrl: 'song.html'
})
export class SongPage {

  recorderState = RecorderState;
  
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public recorder: RecorderProvider) {
  }

  startRecording() {
    try {
      this.recorder.startRecording();
    }
    catch (e) {
      this.showAlert('Could not start recording.');
    }
  }

  stopRecording() {
    try {
      this.recorder.stopRecording();
    }
    catch (e) {
      this.showAlert('Could not stop recording.');
    }
  }

  startPlayback() {
    try {
      this.recorder.startPlayback();
    }
    catch (e) {
      this.showAlert('Could not play recording.');
    }
  }

  stopPlayback() {
    try {
      this.recorder.stopPlayback();
    }
    catch (e) {
      this.showAlert('Could not stop playing recording.');
    }
  } 

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
