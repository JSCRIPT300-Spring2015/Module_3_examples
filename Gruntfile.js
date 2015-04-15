module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			// options: {
			// 	banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			// },
			dist: {
				// file: {
				// 	'js/<%= pkg.name %>.min.js' : ['src/js/<%= pkg.name %>.js']
				// }
				file: {
					'js/jquery.min.js': ['src/js/jquery-1.11.2.js']
				}
			},
			dev: {
				options: {
					compress: false,
					beautify: true,
					mangle: false
				}
			},
			files: {
				//'js/<%= pkg.name %>.min.js' : ['src/js/<%= pkg.name %>.js']
				'js/jquery.min.js': ['src/js/jquery-1.11.2.js']
			}
		},
		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify:dev']);
	grunt.registerTask('dist', ['uglify:dist']);
	grunt.registerTask('dev', ['uglify:dev']);
};