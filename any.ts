function returnAny(message): any {
  console.log(message);
}

const any1 = returnAny("갓");

any1.toString();
/*
any1.toString();
     ^
TypeError: Cannot read properties of undefined (reading 'toString')
    at Object.<anonymous> (C:\work\react-prj\tsTest\any.js:5:6)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/
