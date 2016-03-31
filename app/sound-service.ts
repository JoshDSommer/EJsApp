import {Injectable} from 'angular2/core';


@Injectable()
export class SoundService {
	private tts: any;

	constructor() {
		this.tts = require("nativescript-texttospeech");
	}
	playTTS(text: string): void {
		this.tts.speak(text, true, 1.0, 1.0, 1.0);
	}
}