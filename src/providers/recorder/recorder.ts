import { Injectable } from '@angular/core';
import { MediaPlugin } from 'ionic-native';

export enum RecorderState {
    Ready,
    Recording,
    Recorded,
    Playing
}

@Injectable()
export class RecorderProvider {
  
  mediaPlugin: MediaPlugin = null;
  state: RecorderState = RecorderState.Ready;

  get MediaPlugin(): MediaPlugin {
    if (this.mediaPlugin == null) {
      // this.mediaPlugin = new MediaPlugin('../Library/NoCloud/recording.wav');
    }

    return this.mediaPlugin;
  }

  startRecording() {
    this.MediaPlugin.startRecord();
    this.state = RecorderState.Recording;
  }

  stopRecording() {
    this.MediaPlugin.stopRecord();
    this.state = RecorderState.Recorded;
  }

  startPlayback() {
    this.MediaPlugin.play();
    this.state = RecorderState.Playing;
  }

  stopPlayback() {
    this.MediaPlugin.stop();
    this.state = RecorderState.Ready;
  }

}
