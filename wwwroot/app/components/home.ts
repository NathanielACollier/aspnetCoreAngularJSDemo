import { ComponentController, OnChangesPropertyType } from "../AngularJs";
import { GeneralService } from "../services";

'use strict';


export class HomeComponentController implements ComponentController {

    message: string;

    static $inject = [GeneralService.angularName];
    constructor(private generalService: GeneralService) {

    }

    $onInit = async () => {
        this.message = await this.generalService.getHello();
    };

    $onChanges = (changeObj: { [propName: string]: OnChangesPropertyType }) => {

    };


}


export let HomeComponent: ng.IComponentOptions = {
    controller: HomeComponentController
    ,controllerAs: 'vm'
    ,templateUrl: 'app/components/home.html'
};