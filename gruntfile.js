module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'admin/js/script.js':['admin/js/scripts/script.js']
				} // files
			} // target
		}, // uglify
		watch: {
			options: { livereload:true },
			// scripts: {
				// files: ['admin/js/scripts/script.js'],
				// tasks: ['uglify'] 
			// }, // scripts
			php: {
				files: ['*.php']
			}, // php
			php_files: {
				files: ['admin/*.php']
			}
		} // watch
	}) // initConfig
	grunt.registerTask('default','watch');
} // export
