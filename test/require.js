#!/usr/bin/env node
require('../index.js');

// echo(`Hello`)
// let f = $(`ping -t 1 www.google.com`);
// echo(f)
// echo(args)

try {
$(`cat invalid.txt`)
} catch (e) {
    console.log(e.detail.status);
    console.log(e.detail.output);
    console.log(e.detail.stderr);
}

try {
    eval(`nonExistingCommand.sh`)
  } catch (err) {
    console.log(err.message);
    console.log(err.detail.status) // 1
    console.log(err.detail.stderr) // "cat: invalid.txt: No such file or directory"
  }