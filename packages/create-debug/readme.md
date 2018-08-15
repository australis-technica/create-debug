Desc:  

create debug from "debug" using module.id/filename  
redirects to stdout if env.DEBUG_TO === "stdout"   

...WIP

Requires:  
    Node like modules as in  { id: filename, filename: __filename }

Install:  

    npm i @australis/create-debug

Usage:

    import { debugModule }  from "@australis/create-debug";
    const debug = debugModule(module); // IDebugger
    debug("Hello");

Debugger namespace:   

`${package.name}|${module.filename.parents}|${module.name}`

Notes:  

parents+name: collapsed/compressed, ex: xyz/xyz/xyz => xyz  
index: collapsed to parent dir or package.name

favors:    
 - folder-module-pattern
 - nesting
 - short-names
 - re-exports
 - feature-function classification  

 ex:

    @my/pkg|repo|users|get
    @your/auth/handler/require-auth