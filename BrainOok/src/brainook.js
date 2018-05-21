'use strict';

console.log("BrainOok v0.3.0 (@CosasDePuma)");

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

if(!String.prototype.toBrainfuck) {
    String.prototype.toBrainfuck = function () {
        let cmds = this
            .match(new RegExp('Ook[.!?] Ook[.!?]', 'g'));
        for(let i in cmds) {
            switch(cmds[i]) {
                case 'Ook. Ook.': cmds[i] = '+'; break;
                case 'Ook. Ook!': cmds[i] = ','; break;
                case 'Ook. Ook?': cmds[i] = '>'; break;
                case 'Ook! Ook.': cmds[i] = '.'; break;
                case 'Ook! Ook!': cmds[i] = '-'; break;
                case 'Ook! Ook?': cmds[i] = '['; break;
                case 'Ook? Ook.': cmds[i] = '<'; break;
                case 'Ook? Ook!': cmds[i] = ']'; break;
                default: cmds[i] = '';
            }
        }
        return (cmds !== null) ? cmds.join('') : this;
    }
}