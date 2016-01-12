module.exports = function (grunt) {

	grunt.loadTasks("../../tasks");

	grunt.initConfig({

		systemjs: {
			es6: {
				options: {
					baseURL: "/",
					configFile: "config.js",
					minify: false,
					sfx: false
				},
				files: [{
					src: "app/init.js",
					dest: "dist/demo.js"
				}]
			}
		}
	});

	grunt.registerTask("default", ["systemjs"]);
};


