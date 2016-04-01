
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
			<ActionBar title="Ethans App!">
			</ActionBar>
			<ScrollView>
			<WrapLayout orientation="horizontal" width="100%">
				<kid-button [kid-option]="item" *ngFor="#item of items"></kid-button>
			</WrapLayout>
			</ScrollView>
		</StackLayout>
	`,
	styles: [`
		ActionBar{
			background-color:#1E88E5;
		}
		Label{
			font-size: 35;
			horizontal-align: center;
			text-align:center;
			background-color:blue;
			color:white;
			border-bottom-width:5;
			border-color:#101010;
			width:100%;
			padding:5px 0;
		}
		StackLayout{
			background-color:#212121;
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
		page.actionBarHidden = false;
		orientationModule.setCurrentOrientation("landscape", function() {
			console.log("landscape orientation set");
		});
	}
}