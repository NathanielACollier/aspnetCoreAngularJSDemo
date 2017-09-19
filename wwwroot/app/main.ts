'use strict';
import * as angular from "angular";
import "angular-route";
import { HomeComponent } from "./components/home";
import { configES6Promise } from "./configES6Promise";
import { routeConfig} from "./routeConfig";
import {GeneralService} from "./services";
import {TestControlsDatePickerComponent } from './components/controls/testControlsDatePicker';

// import jquery, jquery-ui, and bootstrap so they get loaded
import * as jquery from "jquery";
import "jquery-ui";
import "bootstrap";


const angularAppName = "angularJsDemoApp";
const app = angular.module(angularAppName, ['ngRoute']);


// services
app.service(GeneralService.angularName, GeneralService);
// components
app.component("home", HomeComponent);
app.component("testControlsDatePicker", TestControlsDatePickerComponent);

app.run(configES6Promise);
// routes
app.config(routeConfig);


// bootstrap
angular.element(document).ready(() => {
    angular.bootstrap(document, [angularAppName]);
});