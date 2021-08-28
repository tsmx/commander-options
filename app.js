const { program } = require('commander');

const processListOption = (value, _previous) => {
    return value.split(',');
}

const processConcatOption = (value, previous) => {
    return previous + value;
}

program
    .option('-t, --test <value>', 'option with an explicitly passed value')
    .option('-d, --default <value>', 'option with a default value', 'standardValue')
    .option('-b, --bool', 'boolean option')
    .option('-bd, --booldefault', 'boolean option with a default value', false)
    .option('-bv, --boolvariant [value]', 'boolean option with an optional passed non-boolean value')
    .option('-no, --no-option', 'option with negation (name starting with \'--no-\')')
    .option('-sn, --split-name <value>', 'option with a name splitted by \'-\'')
    .option('-cl, --customlist <items>', 'custom processed option returning a list from a comma separated string', processListOption)
    .option('-cc, --customconcat <iteem>', 'custom processed option returning the concatenation of all occurences', processConcatOption, '')
    .requiredOption('-r, --required <value>', 'required option');

program.parse();

const options = program.opts();
console.log('options:');
if (options) {
    console.log(JSON.stringify(options, null, 2));
}
else {
    console.log('no options');
}
console.log('unprocessed args:');
console.log(program.args);