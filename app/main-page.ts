
import {Component, OnInit, Inject } from 'angular2/core';
import * as pages from 'ui/page';
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import {IKidOptions, OptionsService} from './options-service';
import {KidButton} from './kid-button';
import * as orientationModule  from 'nativescript-screen-orientation';
import * as scrollView from 'ui/scroll-view';

@Component({
	selector: 'main',
	template: `
		<StackLayout>
			<Label align="center" text="EJs App!"></Label>
			<ScrollView>
			<WrapLayout orientation="horizontal" width="100%">
				<kid-button [kid-option]="item" *ngFor="#item of items"></kid-button>
			</WrapLayout>
			</ScrollView>
		</StackLayout>
	`,
	styles: [`
		Label{
			font-size: 45;
			horizontal-align: center;
			color:white;
		}
		StackLayout{
			background-color:blue;
		}
	`],
	directives: [KidButton],
	providers: [OptionsService]
})

export class MainPage implements OnInit {
	public items: IKidOptions[];

	constructor( @Inject(OptionsService) private options: OptionsService) {
		this.items = options.options;
	}

	ngOnInit(): void {
		//get rid of the action bar.
		let page = frame.topmost().currentPage;
		page.actionBarHidden = true;
		// orientationModule.setCurrentOrientation("landscape", function() {
		// 	console.log("landscape orientation set");
		// });
	}
}