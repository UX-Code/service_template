module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ts: {
      default: {
        src: ['src/**/*.ts'],
        outDir: 'dist',
        options: {
          rootDir: 'src',
          module: 'commonjs',
          target: 'es6',
          experimentalDecorators: true,
          sourceMap: false
        },
      },
      ts_watch: {
        tsconfig: './tsconfig.json',
        watch: "."
      }
    },
  });
  grunt.loadNpmTasks('grunt-ts');
  grunt.registerTask('default', ['ts:default']);
  grunt.registerTask('watch', ['ts:ts_watch']);
}; 