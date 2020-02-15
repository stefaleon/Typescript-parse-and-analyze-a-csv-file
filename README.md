- `tsc --init` produces `tsconfig.json`, in there set the directories

```
"outDir": "./build"
"rootDir": "./src"
```

- `tsc -w` watches for changes in `/src` and compiles the output in `/build`

* npm install `nodemon` and `concurrently`

- set the scripts

```
"compilewatch": "tsc -w",
"nodemonindex": "nodemon build/index.js",
"start": "concurrently npm:compilewatch npm:nodemonindex"
```

- to use the Node file system, npm install `@types/node`

## project target

- Node Type definitions
- Generics
- Inheritance vs Composition
