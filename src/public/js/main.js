'use strict';

define(function (require) {

    var $ = require('jquery');
    var skeletonTmpl = require('delve-client/tmpl/skeleton.tmpl');
    var classSelectionTmpl = require('delve-client/tmpl/class-selection.tmpl');
    var skillSelectionTmpl = require('delve-client/tmpl/skill-selection.tmpl');

    var DelveClient = function() {};

    DelveClient.prototype.main = function() {
        var self = this;
        console.log('select class');
        var skeletonHtml = skeletonTmpl({static: '/static'});
        var classSelectionHtml = classSelectionTmpl({static: '/static', name: 'Gonad'});
        $('body').append(skeletonHtml);
        $('#app-container').append(classSelectionHtml);
        $('#next').click(function() {
            self.selectSkills();
        });
    };

    DelveClient.prototype.selectSkills = function() {
        console.log('select skills');
        var skillSelectionHtml = skillSelectionTmpl({static: '/static', name: 'Gonad'});
        var $formControl = $('#form-control');
        $formControl.prepend($('<button id="back" class="btn">Back</button>'));
        $('#character-form').replaceWith(skillSelectionHtml);
        $('#next').click(function() {
            console.log('select spells');
            // this.selectSpells();
        });
    };

    return DelveClient;
});
