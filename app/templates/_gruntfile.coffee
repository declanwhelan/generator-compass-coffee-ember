module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile:
        files:
          'app/scripts/js/app.js': 'app/scripts/coffee/**/*.coffee'

    compass:
      dev:
        options:
          sassDir: 'app/scripts/sass'
          cssDir: 'app/scripts/css'

    watch:
      files:
        files: [ 'app/scripts/coffee/**/*.coffee', 'app/scripts/sass/**/*.scss' ]
        tasks: ["coffee", "compass"]
  
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.registerTask "build", [
    "coffee"
    "compass"
  ]
  grunt.registerTask "w", ["watch"]
  grunt.registerTask "default", ["build"]
  return