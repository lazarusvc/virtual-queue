!function(){"use strict";angular.module("virtualQueue",["ngAnimate","ngCookies","ngTouch","ngIntlTelInput","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}];this.getTec=e}angular.module("virtualQueue").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("virtualQueue").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,n,a,o){var i,r=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){r.type(e).pause()["delete"]()}),i=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){r.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){i()})}function n(e,t){function n(){return a().then(function(){e.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return a}e.$inject=["malarkey"],angular.module("virtualQueue").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function n(n){function o(e){return e.data}function i(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(a+"/contributors?per_page="+n).then(o)["catch"](i)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:a,getContributors:n};return o}e.$inject=["$log","$http"],angular.module("virtualQueue").factory("githubContributor",e)}(),function(){"use strict";function e(e,t,n,a,o){var i=o.search().orgId,r=this,i="scotia.virtualqueue.com";r.group_list=[],r.queue_list=[];var s=[];n.myInstructions="Choose a location",n.qStyle={visibility:"hidden"},n.phoneStyle={visibility:"hidden"},n.gStyle={visibility:"visible"},n.resetStyle={visibility:"hidden"},e({method:"GET",url:"http://169.45.236.176:4000/api/v1/organization/?org_domain="+i}).success(function(e){r.group_list=e.data.org_queue_groups,t.debug(e.data.org_queue_groups)}).error(function(){}),n.stepOne=function(e){t.debug("Index selcted "+e),t.debug(r.group_list[parseInt(e)]),r.queue_list=r.group_list[parseInt(e)-1].group_queues,n.qStyle={visibility:"visible"},n.gStyle={display:"none"},n.myInstructions="What do you want to do?",n.resetStyle={visibility:"visible"}},n.stepTwo=function(t){e({method:"GET",url:"http://169.45.236.176:4000/api/v1/queues/?org_domain="+i+"&queue_id="+t}).success(function(e){s=e.data.queue_data,n.myInstructions="Please enter your number",n.phoneStyle={visibility:"visible"},n.qStyle={display:"none"},n.myMessage=s.length+" person/s are currently in line.",r.queue_id=t}).error(function(){})},n.stepThree=function(){var a=n.telNumber;t.debug(a),"undefined"==typeof a?n.myMessage="Incorrect Number Format":e({method:"POST",data:$.param({phone_number:a,queue_id:r.queue_id}),headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"http://169.45.236.176:4000/api/v1/queues/users/"}).success(function(e){t.debug(e),r.queue_number=e.data.queue_position,n.myInstructions="You have been added to the line!",n.myNumber="#"+r.queue_number,n.phoneStyle={display:"none"},n.myMessage=""}).error(function(){n.myInstructions="Oops something went wrong! :("})},n.reset=function(){a.reload()}}e.$inject=["$http","$log","$scope","$state","$location"];angular.module("virtualQueue").controller("NewController",e)}(),function(){"use strict";function e(e,t,n){function a(){i(),e(function(){r.classAnimation="rubberBand"},4e3)}function o(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function i(){r.awesomeThings=t.getTec(),angular.forEach(r.awesomeThings,function(e){e.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1455977407611,r.showToastr=o,a()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("virtualQueue").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("virtualQueue").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/Side",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("new",{url:"/queues?orgId",templateUrl:"app/newQ/newqueue.html",controller:"NewController",controllerAs:"new"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("virtualQueue").config(e)}(),function(){"use strict";angular.module("virtualQueue").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t,n){e.debugEnabled(!0),n.set({defaultCountry:"us"}),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig","ngIntlTelInputProvider"],angular.module("virtualQueue").config(e)}(),angular.module("virtualQueue").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your appss.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/newQ/newqueue.html",'<html><head><style>\n            .navbar-inverse .navbar-brand {\n                color: #B6B6B6;\n            }\n            .navbar-inverse .navbar-nav>li>a {\n                color: #B6B6B6;\n            }\n            section.col-xs-12{\n                margin: 0 auto;\n                padding: 5%;\n               }\n            .elementStyle {\n                text-align:center;\n                display: block;\n                margin: 0 auto;\n                padding: 4%;\n                width: 80%;\n            }\n            .tel {\n                text-align:center;\n                display: block;\n                margin: 0 auto;\n                padding: 4%;\n                width: 100%;\n            }\n            .row {\n                padding: 2%;\n            }\n            section{\n                float: left;\n                height: 100vh;\n                    \n            }\n            #first {\n                padding: 10%;\n                heigth: "50%";\n                text-align:center;\n                display: block;\n                margin: 0 auto;\n            }\n            #second {\n                background-color:rgba(255, 255, 255, 0.90);\n            }\n            .header {\n              color: #212121;\n              font-size: 35px;\n              text-transform: uppercase;\n              letter-spacing: 5px;\n              padding-top: 2%;\n              padding-bottom: 2%;\n            }\n            body {\n                background-image:url(../src/assets/images/waiting2.jpg);\n                background-repeat:no-repeat;\n                background-size:cover;\n            }\n            .title {\n                font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n                text-transform: uppercase;\n                font-weight: 800;\n                font-size: 60px;\n                line-height: 70px;\n                margin-bottom: 50px;\n                color: #212121;\n            }\n            .reset {\n                position:absolute;\n                bottom:0;\n            } \n            .phrase {\n                bottom:30%;\n                position:absolute;\n            }\n        </style><title>New Entry</title></head><body><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><section id="first" class="col-xs-12 col-sm-12 col-md-6 col-lg-8"><div><h1 class="title">The Virtual Queue</h1><h3 class="phrase">The world\'s first end to end (Customer - Business) customizable Wait in-line management system."</h3><br></div></section><section id="second" class="col-xs-12 col-sm-12 col-md-6 col-lg-4"><div class="row"><h2 class="header" style="text-align: center;">{{myInstructions}}</h2><div class="row" ng-style="gStyle" ng-repeat="group in new.group_list"><button class="btn btn-primary btn-lg elementStyle" value="{{group.group_id}}" ng-click="stepOne(group.group_id)">{{group.group_name}}</button></div><div class="row" ng-style="qStyle" ng-repeat="item in new.queue_list"><button class="btn btn-primary btn-lg elementStyle" value="{{item.queue_id}}" ng-click="stepTwo(item.queue_id)">{{item.queue_name}}</button></div><div class="row" ng-style="phoneStyle"><h4><span class="tel"><input class="tel" type="text" ng-model="telNumber" ng-intl-tel-input=""></span></h4><button class="btn btn-danger btn-md elementStyle" ng-click="stepThree()"><span class="glyphicon glyphicon-thumbs-up" <="" span=""></span></button></div><h1 class="elementStyle">{{ myNumber }}</h1><label id="message">{{ myMessage }}</label><br><br><br><button class="btn btn-default reset" ng-style="resetStyle" ng-click="reset()">Start Over</button></div></section></body></html>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" ui-sref="new"><span><img src="../src/assets/images/logo-icon.png"></span></a></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-738c40e81c.js.map
