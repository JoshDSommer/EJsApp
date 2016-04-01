
import {Component, Inject, Input, OnInit } from 'angular2/core';
import * as ImageModule from 'ui/image';
import {SoundService} from './sound-service';
import {IKidOptions} from './options-service';
import * as animate from 'ui/animation';
import * as frame from 'ui/frame';
import * as pages from 'ui/page';

@Component({
	selector: 'kid-button',
	template: `
		<StackLayout (tap)="buttonTapped">
			<Label id="txtLabel-{{KidOption.name}}" [text]="KidOption.name"></Label>
			<Image id="imgButton-{{KidOption.name}}" src="~/images/{{ KidOption != null ?  KidOption.image : 'person.jpg' }}" (tap)="Tapped()"></Image>
		</StackLayout>
	`,
	styles: [`
		StackLayout{
			width:25%;
		}
		Image{
			border-radius:150;
			border-width:2;
			border-color:#ECEFF1;
			width:80%;
			margin:0 10% 50 10%;
		}
		Label{
			font-size:20;
			horizontal-align: center;
			color:#fff;
			margin-top:10;
		}
	`],
	providers: [SoundService]
})

export class KidButton {
	private page: any;
	@Input('kid-option') public KidOption: IKidOptions;

	constructor( @Inject(SoundService) private sound: SoundService) {
		this.page = frame.topmost().currentPage;
	}
	ngOnInit(): void {

	}

	public Tapped(): void {
		let image = this.page.getViewById('imgButton-' + this.KidOption.name);
		let txt = this.page.getViewById('txtLabel-' + this.KidOption.name);
		this.sound.playTTS(this.KidOption.value);
		image.animate({
			scale: { x: 1.2, y: 1.2 },
			duration: 10
		}).then(() => { return image.animate({ scale: { x: 0.7, y: 0.7 } }); })
		.then(() => { return image.animate({ scale: { x: 1, y: 1 } }); });


	}
}