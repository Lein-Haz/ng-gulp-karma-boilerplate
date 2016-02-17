angular.module('<%= moduleName %>',[
    'ui.router'
])

    .config(['$stateProvider',function config( $stateProvider ) {
        $stateProvider.state( '<%= name %>', {
            url: '/<%= name %>',
            views: {
                "main": {
                    controller: '<%= PascalName %>Ctrl',
                    templateUrl: '<%= name %>/<%= name %>.tpl.html'
                }
            },
            data:{ pageTitle: '<%= PascalName %>' }
        });
    }])

    .controller('<%= PascalName %>Ctrl',[
        '$scope',
        function($scope){

        }
    ])
;
