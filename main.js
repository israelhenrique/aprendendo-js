#!/usr/bin/env node

"use strict";

const filename = "teste"

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

const pessoa = new Pessoa('Israel')

console.log(pessoa.nome)

const fs = require('./delayable-fs')
fs.writeDelay = 100
fs.readDelay = 50

if (fs.existsSync(filename)) {
  fs.unlinkSync(filename)
}

var events = require('events')

var eventEmitter = new events.EventEmitter()

let pessoa2 = {}

const read = function(){

  fs.readFile(filename, "utf8", function (err, nome){
    if(err){
      return console.log(err)
    }

    pessoa2 = new Pessoa(nome)
    console.log(`Read file: ${pessoa2.nome}`)
  })

}

eventEmitter.on('written', read)

fs.writeFile(filename, pessoa.nome, function(err){
  if(err){
    return console.log(err)
  }

  console.log(`Saved file: ${filename}`)
  eventEmitter.emit('written');

})
