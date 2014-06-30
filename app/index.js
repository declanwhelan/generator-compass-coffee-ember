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


  askFor: function () {
    var done = this.async();

    this.log(yosay('Welcome to the ember...etc generator'));

    var prompts = [{
      name: 'emberChoice',
      message: 'Want to set this up as an ember project or leave out that lib?(Y/n)',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.emberChoice = props.emberChoice == 'y' || props.emberChoice =='Y';
      done();
    }.bind(this));
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
    if(this.emberChoice)
    {
      this.copy("_index_with_ember.html", "index.html");
      this.copy('_bower_with_ember.json', 'bower.json');
    }
    else{
      this.copy("_index.html", "index.html");
      this.copy('_bower.json', 'bower.json');
    }
    this.copy("_gruntfile.coffee", "Gruntfile.coffee");
    this.copy('_package.json', 'package.json');
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
