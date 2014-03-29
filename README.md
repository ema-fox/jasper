Jasper is an experimental language that brings javascript halfway to arc. It's still pretty much in flux.

It differs from arc by
- representing lists by arrays and not cons cells.
- having no TCO.
- being ugly.

It differs from javascript by
- having macros.
- everything is an expression.

After cloning this repo, get the compiler:
    $ wget ema-fox.github.io/jasper/compile.jpr.js
Compile your copy of the compiler:
    $ node compile.jpr.js parse.jpr compile.jpr
Run the repl:
    $ node compile.jpr.js -i
    ¿ (map [+ _ 1] '(1 2 3))
    (2 3 4)
    ¿ 

 
