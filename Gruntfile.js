module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myApp: {
				options: {
					module: 'wcCardsResponsiveTemplates',
					standalone: true
				},
				cwd: '.',
				src: ['cards-responsive.html'],
				dest: 'wccardsresponsivetemplates.js'
			}
		},
		concat: {
		    options: {
		    },
		    dist: {
		      src: ['wccardsresponsivetemplates.js', 'index.js'],
		      dest: 'dist/wccardsresponsive.js',
		    },
		  },
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['ngtemplates','concat']);
};