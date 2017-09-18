angular.module('myApp',['ngMessages','ngRoute'])
    .config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/',{
                templateUrl: './Home.html',
                controller : 'HomeCtrl',
                controllerAs: 'ctrl'
            })
            .when('/Home',{
                templateUrl: './Home.html',
                controller : 'HomeCtrl',
                controllerAs: 'ctrl'
            })
            .when('/NewMeal',{
                templateUrl: './NewMeal.html',
                controller : 'NewMealCtrl',
                controllerAs: 'ctrl1'
            })
            .when('/MyEarnings',{
                templateUrl: './MyEarnings.html',
                controller : 'MyEarningsCtrl',
                controllerAs: 'ctrl2'
            })
            .when('/error', {
                template : '<p>Error Page Not Found</p>'
            })
            .otherwise('/Home');
    }])
    .run(['$rootScope','$location', function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
    }])
    .controller('HomeCtrl',['$scope','$rootScope',function ($scope, $rootScope) {
        console.log("HomeCtrl");

        $rootScope.basePrice  = 0.00;
        $rootScope.taxRate  = 0.00;
        $rootScope.tipPerc  = 0.00;

        $rootScope.sub_chg_sub_tot = 0.00;
        $rootScope.sub_chg_tip  = 0.00;
        $rootScope.sub_chg_tot  = 0.00;

        $rootScope.ern_tip_tot  = 0.00;
        $rootScope.ern_ml_cnt  = 0.00;
        $rootScope.ern_avg_tip  = 0.00;

        $rootScope.form_valid = false;
        $rootScope.form_submit = false;

        // console.log($rootScope)


    }])
    .controller('NewMealCtrl',['$scope','$rootScope',function ($scope, $rootScope) {

        console.log("NewMealCtrl");
        //
        // console.log($scope)
        // console.log($rootScope)

        $scope.basePrice  = 0.00;
        $scope.taxRate  = 0.00;
        $scope.tipPerc  = 0.00;

        $scope.sub_chg_sub_tot = 0.00;
        $scope.sub_chg_tip  = 0.00;
        $scope.sub_chg_tot  = 0.00;

        $scope.submit = function(form){
            // console.log($scope)
            // console.log(form.$valid)
            if(form.$valid==true)
            {
                $rootScope.form_valid = form.$valid;
                $rootScope.form_submit = form.$submitted;

                // console.log($scope)

                $scope.sub_chg_sub_tot = Number($scope.basePrice) + (Number($scope.basePrice) * Number($scope.taxRate)/100);
                $rootScope.sub_chg_sub_tot = $scope.sub_chg_sub_tot;

                $scope.sub_chg_tip  = Number($scope.basePrice) * Number($scope.tipPerc /100);
                $rootScope.sub_chg_tip = $scope.sub_chg_tip

                $scope.sub_chg_tot  = Number($scope.sub_chg_sub_tot) + Number($scope.sub_chg_tip);
                $rootScope.sub_chg_tot = $scope.sub_chg_tot

                $rootScope.ern_tip_tot = Number($rootScope.ern_tip_tot) + Number($rootScope.sub_chg_tip);
                $rootScope.ern_ml_cnt  = Number($rootScope.ern_ml_cnt)+1;
                $rootScope.ern_avg_tip = Number($rootScope.ern_tip_tot) / Number($rootScope.ern_ml_cnt);
                // console.log($rootScope)
            }


            // console.log(inputForm.$valid);
            // console.log($scope.valid)
        }
        $scope.reset = function (form) {
            console.log("resetting")
            form.$submitted=false;
            form.$valid=false;

            $scope.basePrice  = 0.00;
            $scope.taxRate  = 0.00;
            $scope.tipPerc  = 0.00;

            $scope.sub_chg_sub_tot = 0.00;
            $scope.sub_chg_tip  = 0.00;
            $scope.sub_chg_tot  = 0.00;
        }

    }])
    .controller('MyEarningsCtrl',['$scope','$rootScope',function ($scope, $rootScope) {
        // console.log($rootScope)

        $scope.ern_tip_tot = $rootScope.ern_tip_tot;
        $scope.ern_ml_cnt = $rootScope.ern_ml_cnt;
        $scope.ern_avg_tip = $rootScope.ern_avg_tip;

        $scope.clear = function(){
            $rootScope.form_valid = false;
            $rootScope.form_submit = false;

            $rootScope.basePrice  = 0.00;
            $rootScope.taxRate  = 0.00;
            $rootScope.tipPerc  = 0.00;

            $rootScope.sub_chg_sub_tot = 0.00;
            $rootScope.sub_chg_tip  = 0.00;
            $rootScope.sub_chg_tot  = 0.00;

            $rootScope.ern_tip_tot  = 0.00;
            $rootScope.ern_ml_cnt  = 0.00;
            $rootScope.ern_avg_tip  = 0.00;
            $scope.ern_tip_tot  = 0.00;
            $scope.ern_ml_cnt  = 0.00;
            $scope.ern_avg_tip  = 0.00;

            // console.log(inputForm.$valid);
            // console.log($scope.valid)
        }
    }])
