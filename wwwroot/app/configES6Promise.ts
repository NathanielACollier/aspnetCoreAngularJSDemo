configES6Promise.$inject = ["$window", "$q"];

export function configES6Promise($window: ng.IWindowService, $q: ng.IQService) {
    $window.Promise = $q;
}