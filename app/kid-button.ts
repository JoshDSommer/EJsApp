
import {Component, Inject, Input, OnInit } from 'angular2/core';
import * as ImageModule from 'ui/image';
import {SoundService} from './sound-service';
import {IKidOptions} from './options-service';
import * as animate from 'ui/animation';

@Component({
	selector: 'kid-button',
	template: `
		<StackLayout (tap)="buttonTapped">
			<Label [text]="KidOption.name"></Label>
			<Image src="~/images/{{ KidOption != null ?  KidOption.image : 'person.jpg' }}" (tap)="Tapped()"></Image>
		</StackLayout>
	`,
	styles: [`
		StackLayout{
			width:40%;
			margin:0 5%;
		}
		Image{
			border-radius:150;
		}
		Label{
			font-size:20;
			horizontal-align: center;
		}
	`],
	providers: [SoundService]
})

export class KidButton {

	@Input('kid-option') public KidOption: IKidOptions;

	constructor( @Inject(SoundService) private sound: SoundService) {

	}
	ngOnInit(): void{

	}

	public Tapped(): void {
		this.sound.playTTS(this.KidOption.value);
	}
}