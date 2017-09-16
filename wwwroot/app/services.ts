'use strict';


export class GeneralService {
    public static readonly angularName = "GeneralService";
    private readonly serviceAPIRoot = "api/General/";

    static $inject = ["$http"
        ,"$q"];
    constructor(private $http: ng.IHttpService
        ,private $q: ng.IQService) {

    }

    getHello(): ng.IPromise<string> {
        let deferred = this.$q.defer<string>();
        
        deferred.resolve("Hello World!");
        
        return deferred.promise;
    }


}