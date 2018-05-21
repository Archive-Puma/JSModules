'use strict';

console.log("BrainOok v0.0.1 (@CosasDePuma)");

if(!String.prototype.toOok) {
    String.prototype.toOok = function () {
        return this
            .replace(new RegExp('[^\\>\\<\\[\\]\\+\\-\\.\\,]', 'g'), '')
            .replace(new RegExp('\\.', 'g'), 'Ook! Ook. ')
            .replace(new RegExp('\\,', 'g'), 'Ook. Ook! ')
            .replace(new RegExp('\\>', 'g'), 'Ook. Ook? ')
            .replace(new RegExp('\\<', 'g'), 'Ook? Ook. ')
            .replace(new RegExp('\\[', 'g'), 'Ook! Ook? ')
            .replace(new RegExp('\\]', 'g'), 'Ook? Ook! ')
            .replace(new RegExp('\\+', 'g'), 'Ook. Ook. ')
            .replace(new RegExp('\\-', 'g'), 'Ook! Ook! ')
            .trim();
    }
}