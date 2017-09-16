'use strict';
import * as angular from "angular";
import "angular-route";
import { HomeComponent } from "./components/home";
import { configES6Promise } from "./configES6Promise";
import { routeConfig} from "./routeConfig";
import {GeneralService} from "./services";


const angularAppName = "angularJsDemoApp";
const app = angular.module(angularAppName, ['ngRoute']);


// services
app.service(GeneralService.angularName, GeneralService);
// components
app.component("home", HomeComponent);

app.run(configES6Promise);
// routes
app.config(routeConfig);


// bootstrap
angular.element(document).ready(() => {
    angular.bootstrap(document, [angularAppName]);
});