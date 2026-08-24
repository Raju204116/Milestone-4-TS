"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

✅✅✅Install TypeScript & Run a .ts File
✅1. Check Node.js
node -v
npm -v

If both work, you're ready.

✅2. Create a project

mkdir typescript-practice (or,create manually)
cd typescript-practice

Initialize npm:
npm init -y

✅3. Install TypeScript

➡️Option A — Install locally (recommended)
npm install -D typescript

➡️Option B — Install globally
npm install -g typescript


➡️Check:
npx tsc --version
or, tsc -v



✅5. Create a TypeScript file

Create:
app.ts

let name: string = "Raju";
let age: number = 25;
console.log(name);
console.log(age);


✅6. Compile TypeScript
npx tsc
TypeScript will compile .ts files into .js files according to your tsconfig.json.

For a single file, you can also use:
npx tsc app.ts

This generates:
app.js


✅7. Run the JavaScript file
node app.js

Output:
Raju
25


➡️Complete workflow
app.ts
  ↓
npx tsc
  ↓
app.js
  ↓
node app.js

Remember: Node.js runs the generated JavaScript; tsc compiles/checks the TypeScript.


*/ 
//# sourceMappingURL=c21-2-install-and-run-ts-file.js.map