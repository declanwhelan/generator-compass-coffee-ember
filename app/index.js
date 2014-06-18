'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var SassCoffeeEmberGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/scripts');
    this.mkdir('app/scripts/coffee');
    this.mkdir('app/scripts/sass');
    this.mkdir('app/scripts/js');
    this.mkdir('app/scripts/css');
    this.copy("_style.scss", "app/scripts/sass/style.scss");
    this.copy("main.coffee", "app/scripts/coffee/index.coffee");
    this.copy("_index.html", "index.html");
    this.copy("_gruntfile.coffee", "Gruntfile.coffee");
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },
  runNpm: function(){
      var done = this.async();
      this.npmInstall("", function(){
          console.log("\nEverything Setup !!!\n");
          done();
      });
  }
});

module.exports = SassCoffeeEmberGenerator;
