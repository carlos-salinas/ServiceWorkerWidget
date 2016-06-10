/*global logger*/
/*
    WidgetName
    ========================

    @file      : WidgetName.js
    @version   : {{version}}
    @author    : {{author}}
    @date      : {{date}}
    @copyright : {{copyright}}
    @license   : {{license}}

    Documentation
    ========================
    Describe your widget here.
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "mxui/dom",
], function (declare, _WidgetBase) {
    "use strict";

    // Declare widget's prototype.
    return declare("ServiceWorkerWidget.widget.ServiceWorkerWidget", [ _WidgetBase ], {
        // Parameters configured in the Modeler.
        ApplicationServerKey: null,

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {
            logger.debug(this.id + ".constructor");
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            logger.debug(this.id + ".postCreate");

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/my-app/sw.js', {
                    scope: '/my-app/'
                }).then(
                    function(serviceWorkerRegistration){
                        serviceWorkerRegistration.pushManager.subscribe(
                            {
                                userVisibleOnly: true
                            }
                        ).then(
                            function(pushSubscription){
                                console.log(pushSubscription.endpoint);
                            },function(error){
                                console.log(error);
                            }
                    );
                });
            }
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            logger.debug(this.id + ".update");
            if (callback) callback();
        },

        // mxui.widget._WidgetBase.enable is called when the widget should enable editing. Implement to enable editing if widget is input widget.
        enable: function () {
          logger.debug(this.id + ".enable");
        },

        // mxui.widget._WidgetBase.enable is called when the widget should disable editing. Implement to disable editing if widget is input widget.
        disable: function () {
          logger.debug(this.id + ".disable");
        },

        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function (box) {
          logger.debug(this.id + ".resize");
        },

        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function () {
          logger.debug(this.id + ".uninitialize");
            // Clean up listeners, helper objects, etc. There is no need to remove listeners added with this.connect / this.subscribe / this.own.
        }
    });
});
