angular.module('myApp',['ngMessages'])
    .constant('VERSION',1.1)
    .controller('MyCtrl',function (VERSION,$scope) {
        var ctrl = this;
        ctrl.basePrice  = 0.00;
        ctrl.taxRate  = 0.00;
        ctrl.tipPerc  = 0.00;

        ctrl.sub_chg_sub_tot = 0.00;
        ctrl.sub_chg_tip  = 0.00;
        ctrl.sub_chg_tot  = 0.00;

        ctrl.ern_tip_tot  = 0.00;
        ctrl.ern_ml_cnt  = 0.00;
        ctrl.ern_avg_tip  = 0.00;

        console.log(ctrl)

        ctrl.submit = function(form){
            console.log(form.$valid)
            if(form.$valid==true)
            {
                console.log(ctrl)

                ctrl.sub_chg_sub_tot = Number(ctrl.basePrice) + (Number(ctrl.basePrice) * Number(ctrl.taxRate)/100);
                ctrl.sub_chg_tip  = Number(ctrl.basePrice) * Number(ctrl.tipPerc /100);
                ctrl.sub_chg_tot  = Number(ctrl.sub_chg_sub_tot) + Number(ctrl.sub_chg_tip);

                ctrl.ern_tip_tot = Number(ctrl.ern_tip_tot) + Number(ctrl.sub_chg_tip);
                ctrl.ern_ml_cnt  = Number(ctrl.ern_ml_cnt)+1;
                ctrl.ern_avg_tip = Number(ctrl.ern_tip_tot) / Number(ctrl.ern_ml_cnt);
                console.log(ctrl)
            }


            // console.log(inputForm.$valid);
            // console.log($scope.valid)
        }
        ctrl.reset = function (form) {
            form.$submitted=false;
            form.$valid=false;

            ctrl.basePrice  = 0.00;
            ctrl.taxRate  = 0.00;
            ctrl.tipPerc  = 0.00;


        }
        ctrl.clear = function(form){
            form.$submitted=false;
            form.$valid=false;

            ctrl.basePrice  = 0.00;
            ctrl.taxRate  = 0.00;
            ctrl.tipPerc  = 0.00;

            ctrl.sub_chg_sub_tot = 0.00;
            ctrl.sub_chg_tip  = 0.00;
            ctrl.sub_chg_tot  = 0.00;

            ctrl.ern_tip_tot  = 0.00;
            ctrl.ern_ml_cnt  = 0.00;
            ctrl.ern_avg_tip  = 0.00;
            // console.log(inputForm.$valid);
            // console.log($scope.valid)
        }
    });
