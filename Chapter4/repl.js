var repl = require('repl')

repl.start( {
  prompt: 'my repl> ',
  // set the mode to strict, which means each line executed is done so under “use strict.”
  replMode: repl.REPL_MODE_STRICT,
  ignoreUndefined: true,
})
