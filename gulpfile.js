const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer'); // Eski  Browserlarga kodlarni moslashtirib beradi 
const csso = require('gulp-csso'); //Kodlarni bir qatorga otkazish
const rename = require("gulp-rename"); // Bir Qatorli kodlarni fayl nomini style.min.css qilib beradi
const plumber = require('gulp-plumber'); // Xatoliklarni qayerda ekanigini korsatib beardi
const sourcemaps = require('gulp-sourcemaps'); // Css Xarita Yaratish




gulp.task('style', style)

function style() {
    return gulp.src("style.css") // 1 qadam chernovik fayldagi narslarni olish 

    .pipe(sourcemaps.init()) //Css Xarita Yaratish

    .pipe(plumber()) // Xatolarni Topib Berish 

    .pipe(autoprefixer({ 
        browsers: ["last 10 versions"] ,// Browserni eng songgi versiyasiga moslashtirib beradi
        cascade: false // Probelni olib qoyadi 
    }))

    .pipe(gulp.dest("./")) // Toza Kodlarni Saqlab oladi

    .pipe(csso()) //Bir qator qilib beradi

    .pipe(rename({ // style.min.css qiib fayl ochib beradi
        suffix: ".min",
      }))

      .pipe(sourcemaps.write(".")) // qo'shtirnoq ichida .nuqta bilan yozish alohida faylga map xarita faylni saqlaydi 

      .pipe(gulp.dest("./style/")) // 2 qadam belavoyga ulash

  }