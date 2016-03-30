#!/usr/bin/env node

"use strict";

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

const pessoa = new Pessoa('Israel')

console.log(pessoa.nome)

const fs = require('fs')

fs.writeFile("teste", pessoa.nome, function(err){
  if(err){
    return console.log(err)
  }

  console.log("Arquivo Salvo")
})

let pessoa2 = {}

fs.readFile("teste", "utf8", function (err, nome){
  if(err){
    return console.log(err)
  }

  pessoa2 = new Pessoa(nome)
  console.log(pessoa2.nome)
})
