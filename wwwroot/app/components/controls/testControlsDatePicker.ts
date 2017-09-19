import { ComponentController, OnChangesPropertyType } from "../../AngularJs";
import { GeneralService } from "../../services";

'use strict';


class TestControlsDatePickerComponentController implements ComponentController {


    static $inject = [GeneralService.angularName];
    constructor(private generalService: GeneralService) {

    }

    $onInit = async () => {

    };

    $onChanges = (changeObj: { [propName: string]: OnChangesPropertyType }) => {

    };


}


export let TestControlsDatePickerComponent: ng.IComponentOptions = {
    controller: TestControlsDatePickerComponentController
    ,controllerAs: 'vm'
    ,templateUrl: 'app/components/controls/testControlsDatePicker.html'
};