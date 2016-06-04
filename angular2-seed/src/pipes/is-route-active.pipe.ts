import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
	name: "isRouteActive",
	pure: false
})

export class IsRouteActive implements PipeTransform {
	constructor(private _router: Router) {}

	transform(route: Array<any>) {
		//console.log(this._router.serializeUrl(this._router.urlTree), "=", this._router.serializeUrl(this._router.createUrlTree(route)));
		return this._router.serializeUrl(this._router.urlTree) === this._router.serializeUrl(this._router.createUrlTree(route));
	}
}