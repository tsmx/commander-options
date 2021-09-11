const { program } = require('commander');

const processListOption = (value, _previous) => {
  return value.split(',');
}

const processConcatOption = (value, previous) => {
  return previous + value;
}

const logProgramOptions = (prog) => {
  const options = prog.opts();
  console.log('program options:');
  if (options) {
    console.log(JSON.stringify(options, null, 2));
  }
  else {
    console.log('no options');
  }
}

program
  .command('test')
  .option('-x, --x-option', 'command test option')
  .action((options) => {
    console.log('test command executed');
    console.log(JSON.stringify(options, null, 2));
    logProgramOptions(program);
  });

program
  .option('-t, --test <value>', 'option with an explicitly passed value')
  .option('-d, --default <value>', 'option with a default value', 'standardValue')
  .option('-b, --bool', 'boolean option')
  .option('-v, --variadic <value...>', 'variadic option taking 1..n values')
  .option('-bd, --booldefault', 'boolean option with a default value', false)
  .option('-bv, --boolvariant [value]', 'boolean option with an optional passed non-boolean value', false)
  .option('-o, --option', 'option for testing interaction with --no-option')
  .option('-no, --no-option', 'option with negation (name starting with \'--no-\')')
  .option('-s, --split-name-option <value>', 'option with a name splitted by \'-\'')
  .option('-cl, --customlist <items>', 'custom processing returning a list from a comma separated string', processListOption)
  .option('-cc, --customconcat <item>', 'custom processing returning the concatenation of all occurences', processConcatOption, '')
  .requiredOption('-r, --required <value>', 'required option')
  .action(() => {
    console.log('program executed');
    logProgramOptions(program);
  });

program.parse();