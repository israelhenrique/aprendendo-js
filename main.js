#!/usr/bin/env node

'use strict';

const filename = 'teste';

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const pessoa = new Pessoa('Israel');

console.log(pessoa.nome);

const fs = require('./delayable-fs');
fs.writeDelay = 100;
fs.readDelay = 50;

fs.readFile(filename, 'utf8', (err, filename) => {
  if (err) {
    return console.log(err);
  }

  // const pessoa2 = new Pessoa(nome)
  console.log(`Read file: ${filename}`);


  fs.readFile(filename, 'utf8', (err, filename) => {
    if (err) {
      return console.log(err);
    }

    // const pessoa2 = new Pessoa(nome)
    console.log(`Read file: ${filename}`);

    fs.readFile(filename, 'utf8', (err, filename) => {
      if (err) {
        return console.log(err);
      }

      // const pessoa2 = new Pessoa(nome)
      console.log(`Read file: ${filename}`);

      fs.readFile(filename, 'utf8', (err, filename) => {
        if (err) {
          return console.log(err);
        }

        // const pessoa2 = new Pessoa(nome)
        console.log(`Read file: ${filename}`);
      });
    });
  });
});


// fs.writeFile(filename, pessoa.nome, function(err){
//   if(err){
//     return console.log(err)
//   }
//
//   console.log(`Saved file: ${filename}`)
//
//
// })
