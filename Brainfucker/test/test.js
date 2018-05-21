const Brainfuck = require('../src/brainfucker')

function suite(mod) {
    mod.runLast();
    console.log(mod.lastOutput());
    mod.compile();
    mod.run();
    console.log(mod.output());
    mod.compileTime();
}

const programs = {
    'helloworld': '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.',
    'triangles': '>++++[<++++++++>-]>++++++++[>++++<-]>>++>>>+>>>+<<<<<<<<<<[-[->+<]>[-<+>>>.<<]>>>[[->++++++++[>++++<-]>.<<[->+<]+>[->++++++++++<<+>]>.[-]>]]+<<<[-[->+<]+>[-<+>>>-[->+<]++>[-<->]<<<]<<<<]++++++++++.+++.[-]<]+++++',
    'input_code': ',.,.,.,.',
    'input_args': [80, 117, 109, 97],
    'bad_inputs': [80, 'a', -1, "AAA", 299]
}

let brainfuck = new Brainfuck();
suite(brainfuck);
brainfuck = new Brainfuck(programs['helloworld']);
suite(brainfuck);
brainfuck.load(programs['triangles']);
suite(brainfuck);
brainfuck.load(programs['input_code'], programs['input_args']);
suite(brainfuck);
brainfuck.load(programs['input_code'], programs['bad_inputs']);
suite(brainfuck);