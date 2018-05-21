'use strict';

module.exports = class Brainfuck {

    constructor(code = '', args = undefined) {
        console.log('Brainfucker v0.2.0 (@CosasDePuma)');

        this.argv = args;
        this.code = code;

        this.reload();
    }

    reload() {
        this.buffer = '';

        this.argc = 0;
        this.index = 0;
        this.instruction_pointer = 0;

        this.stack = [];
        this.memory = [];

        this.memory[0] = 0;
    }

    clean(code) {
        return code
            .replace(new RegExp('[^\\>\\<\\[\\]\\+\\-\\.\\,]', 'g'), '');
    }

    parse(cmd) {
        switch (cmd) {
            case '>': this.index++; if (!this.memory[this.index]) this.memory[this.index] = 0; break;
            case '<': this.index--; if (!this.memory[this.index]) this.memory[this.index] = 0; break;
            case '+': this.memory[this.index] = (this.memory[this.index] === 255) ? 0 : this.memory[this.index] + 1; break;
            case '-': this.memory[this.index] = (this.memory[this.index] === 0) ? 255 : this.memory[this.index] - 1; break;
            case '.': this.buffer += String.fromCharCode(this.memory[this.index]); break;
            case ',': if (this.argv) {
                if (Number.isInteger(this.argv[this.argc]) && this.argv[this.argc] >= 0 && this.argv[this.argc] <= 255) { this.memory[this.index] = this.argv[this.argc]; }
                this.argc++;
            } break;
            case '[': this.stack.push(this.instruction_pointer); break;
            case ']': if (this.memory[this.index] === 0) this.stack.pop(); else this.instruction_pointer = this.stack[this.stack.length - 1]; break;
        }
    }

    compile() {
        this.reload();
        while (this.instruction_pointer < this.code.length) {
            this.parse(this.code[this.instruction_pointer]);
            this.instruction_pointer++;
        }
    }

    compileTime() {
        console.time('Compiled in');
        this.compile();
        console.timeEnd('Compiled in');
    }

    runLast() {
        console.log(this.buffer);
    }

    run() {
        this.compile();
        this.runLast();
    }

    lastOutput() {
        return this.buffer;
    }


    output() {
        this.compile()
        return this.lastOutput();
    }

    load(code, args) {
        if (code) this.code = code;
        if (args) this.argv = args;
    }

}