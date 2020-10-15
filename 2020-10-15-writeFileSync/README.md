# Session Notes: Writing Files

## Thursday, October 15, 2020

### Publishing To Surge

If you want to use the `surge` command to publish directly, specify the `site/` directory like so:

```console
surge site
```

This tells surge to publish all the files in `site/` to the web. By default, it will publish everything in the current directory.

It's common to have the files-to-publish live in a separate directory inside a project. Project-related files (documentation, scripts, etc.) live outside of that directory, so you don't have to worry about publishing them.

### fs.writeFileSync

See:

1. The second example here: <https://nodejs.dev/learn/writing-files-with-nodejs>
1. The description + example here: <https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/>

Make sure to run the examples. Make predictions about what the examples will do and verify whether your predictions are correct.

### Files To Run

1. `geeksWriteFileExample.js` is the example from the GeeksForGeeks website above
1. `writeFileExample.js` writes to `site/index.html`

Use `node` to run both.
