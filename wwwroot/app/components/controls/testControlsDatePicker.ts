import { ComponentController, OnChangesPropertyType } from "../../AngularJs";
import { GeneralService } from "../../services";

'use strict';


class TestControlsDatePickerComponentController implements ComponentController {

    dateVal: string;

    static $inject = [GeneralService.angularName,
        "$element",
        "$scope"
    ];
    constructor(private generalService: GeneralService,
        private $element: ng.IAugmentedJQuery,
        private $scope: ng.IScope) {

    }

    $onInit = async () => {
        this.setupHtmlElements();
    };

    $onChanges = (changeObj: { [propName: string]: OnChangesPropertyType }) => {

    };

    setupHtmlElements(){
        let datePicker = $("#myDateTextBox");

        let commonDateOptions: JQueryUI.DatepickerOptions = {
            dateFormat: 'mm/dd/yy'
        };

        // this part of the jquery options is needed only for angular
        commonDateOptions.onSelect = (date)=>{
            // outside angular digest
            this.$scope.$apply(()=>{
                this.dateVal = date;
            });
        };

        // Microsoft Edge -  is interfering, so set the autocomplete attribute to off
        // see: https://www.w3schools.com/tags/att_input_autocomplete.asp
        datePicker.attr("autocomplete", "off");
        
        // calls jquery datepicker with it's options
        datePicker.datepicker(commonDateOptions);
    }

}


export let TestControlsDatePickerComponent: ng.IComponentOptions = {
    controller: TestControlsDatePickerComponentController
    ,controllerAs: 'vm'
    ,templateUrl: 'app/components/controls/testControlsDatePicker.html'
};