# commander-options

> Accompanying sample program for the [Commander options hands-on](https://tsmx.net/commander-options/).

The intention of this project is to get familiar with all features of the option features available in [Commander](https://www.npmjs.com/package/commander).

## Using the program

Simply start the program including the desired arguments for the options by executing `app.js`. The output will show you if the program or a sub-command was executed and what are the options values passed to your code by logging out the corresponding JSON objects. Like so...

```bash
$ node app.js -r test123 -b
program executed
program options:
{
  "default": "standardValue",
  "booldefault": false,
  "boolvariant": false,
  "concat": "",
  "required": "test123",
  "bool": true
}
```

For a comprehensive documentation of all available features to try out with the program, please refer to the [hands-on article](https://tsmx.net/commander-options/).

## Directly calling app.js

The main file `app.js` contains a shebang so that the program can be executed directly if it has sufficient rights.

```bash
$ chmod ug+x app.js
$ ./app.js ...
```
