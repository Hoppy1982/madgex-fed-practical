const { src, dest, series, watch } = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

// ensure Chalk (used in nodemon) always uses colour
process.env.FORCE_COLOR = 1;

function clean(done) {
  return del(['./public/css', './public/js']);
}

function reload(done) {
  browserSync.reload();
  if (done) done();
}

function css(done) {
  return src('src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(sourcemaps.write('./'))
    .pipe(dest('public/css'))
    .pipe(browserSync.stream());
}

function js(done) {
  // no babel or webpack here right now..
  return src('src/js/**/*.js')
    .pipe(dest('public/js/'))
    .pipe(browserSync.stream());
}

function startBrowserSync(done) {
  browserSync.init({
    proxy: 'localhost:8000',
    files: ['./src/templates/**/*']
  });

  watch('./src/js/**/*', js);
  watch('./src/scss/**/*.scss', css);
  watch('./src/templates/**/*', reload);
}

function startAndWatchServer(done) {
  let bootingUp = true;
  let stream = nodemon({
    nodemon: require('nodemon'), // use a modern build of nodemon
    watch: './server',
    script: './server/index.js',
    stdout: false,
    done
  })
    .on('readable', () => {
      // watch the console stream and startup BrowserSync when Hapi running
      stream.stdout.on('data', chunk => {
        if (/Server running at/.test(chunk) && bootingUp) {
          bootingUp = false;
          console.log('Start browser-sync');
          startBrowserSync();
        }
        process.stdout.write(chunk);
      });
      stream.stderr.pipe(process.stderr);
    })
    .on('crash', function() {
      setTimeout(() => {
        // try to restart the server every 10 seconds after a crash
        stream.emit('restart');
      }, 3000);
    });

  return stream;
}

exports.clean = clean;
exports.css = css;
exports.js = js;
exports.build = series(clean, css, js);
exports.startBrowserSync = startBrowserSync;
exports.startAndWatchServer = startAndWatchServer;
exports.default = series(clean, css, js, startAndWatchServer);
