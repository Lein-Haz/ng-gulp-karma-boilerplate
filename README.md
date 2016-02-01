# ng-gulp-boilerplate
An extended AngularJS Boilerplate to kick off new projects, with SASS, Karma-Jasmine integration and Gulp watch/build tasks

# Features
* SASS and karma integerated into build process
* Gulp watch, build and local server tasks
* folder structure pattern to build off of

## Download
```bash
git clone https://github.com/Lein-Haz/ng-gulp-karma-boilerplate.git
```

## 1. Install Global Dependencies
```bash
	sudo npm -g install karma bower gulp
```
- in case these aren't already in your Path

## 2. Setup: Node
```bash
npm install
```
- install all of projects npm dependencies

## 3. Setup: Bower
```bash
bower install
```
- install bower dependencies

## 4. Build Development version
```bash
gulp
```
- this will process following tasks:
 * 1. Lint JS files in src/ folder
 * 2. Clean /build folder
 * 3. Copy bower files to /build folder
 * 4. Compile SASS files, minify and uncss compiled css
 * 5. Copy and minimize images
 * 6. Minify and copy all HTML files into $templateCache
 * 7. Build index.html
 * 8. Copy fonts
 * 9. Run karma unit tests
 * 10. Show build folder size
 * 11. Launch BrowserSync and start watching for file changes

## Start file watch
```bash
gulp watch
```
Run this command to start BrowserSync serve and watch without going through build first.
**Note:** This is in case you inadvertently stopped BrowserSync, a build has to be run prior to using
 this command by itself.
- all file within /src will be watched for changes and injected into browser thanks to BrowserSync
- a recovery command that is merely step 11 of the above `gulp` command, if BrowserSync stops for some reason


## Changelog
### 0.10.0
- First release, build working compile needs work<br>
31.01.2016


