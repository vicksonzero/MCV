//var $ = require("jquery");
var Config = require("../config");
module.exports = (function () {
    var Util = {};

    /**
     * modifies targetObj to fill in missing default values
     * useful for function options
     * @param  {Value Object} targetObj  given options object
     * @param  {Value Object} defaultObj object of expected values and their default values
     */
    Util.mergeDefault = function mergeDefault(targetObj, defaultObj) {
        for (var attrname in defaultObj) {
            if (!targetObj.hasOwnProperty(attrname)) {
                targetObj[attrname] = defaultObj[attrname];
            }
        }
    };
    /**
     * String stringReplace(str[,replacements...]);
     * formats the strings, replaces placeholders like {1} with arguments
     * {1} counts from 1
     * @return {[type]} [description]
     */
    Util.stringReplace = function stringReplace() {
        var args = arguments;
        return args[0].replace(/\{(\d+)\}/, function (match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] : match;
        });
    };


    Util.getRandomDamageModifier = function getRandomDamageModifier() {
        var min = Config.battle.defaultAttackModifierMin;
        var max = Config.battle.defaultAttackModifierMax;
        return Math.random() * (max - min) + min;
    };

    return Util;
})();
