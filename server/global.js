import log4js from 'log4js';
log4jsF = function() {
  var fs = Npm.require('fs'),
  __ROOT_APP_PATH__ = fs.realpathSync('.');

  if (!fs.existsSync(__ROOT_APP_PATH__)) {
    throw new Error(__ROOT_APP_PATH__ + " does not exists");
  }else{
    __ROOT_APP_PATH__ += "../../../../../../";

    var today = ' '+(new Date()).toLocaleDateString(); // include log4js

    log4js.configure({ // configure to use all types in different files.
      appenders: [{
        type: 'file',
        filename: __ROOT_APP_PATH__+"/logs/error"+today+".log", // specify the path where u want logs folder error.log
        category: 'error',
        maxLogSize: 20480,
        backups: 10
      }, {
        type: "file",
        filename: __ROOT_APP_PATH__+"/logs/info"+today+".log", // specify the path where u want logs folder info.log
        category: 'info',
        maxLogSize: 20480,
        backups: 10
      }, {
        type: 'file',
        filename: __ROOT_APP_PATH__+"/logs/debug"+today+".log", // specify the path where u want logs folder debug.log
        category: 'debug',
        maxLogSize: 20480,
        backups: 10
      }]
    });

    var loggerinfo = log4js.getLogger('info'); // initialize the var to use.
    var loggererror = log4js.getLogger('error'); // initialize the var to use.
    var loggerdebug = log4js.getLogger('debug'); // initialize the var to use.

    loggerinfo.info('This is Information Logger 1');
    loggererror.info('This is Error Logger 1');
    loggerdebug.info('This is Debugger 1');
  }
}

fsAppendFile = function(){
  var fs = Npm.require('fs'),
  __ROOT_APP_PATH__ = fs.realpathSync('.');

  if (!fs.existsSync(__ROOT_APP_PATH__)) {
    throw new Error(__ROOT_APP_PATH__ + " does not exists");
  }else{

    var file = __ROOT_APP_PATH__+ "../../../../../../" + "/teste.txt";
    fs.appendFile(file, 'data to append\n', function (err) {
      if (err) throw err;
        console.log('Done!');
    });

  }
}

fscreateWriteStream = function(){
  var fs = Npm.require('fs'),
  __ROOT_APP_PATH__ = fs.realpathSync('.');

  if (!fs.existsSync(__ROOT_APP_PATH__)) {
    throw new Error(__ROOT_APP_PATH__ + " does not exists");
  }else{

    var file = __ROOT_APP_PATH__+ "../../../../../../" + "/teste.txt";

    var wstream = fs.createWriteStream(file,{flags: 'r+'});
    wstream.write('Hello world 1!\n');
    wstream.write('Another line 1');
    // on Node.js older than 0.10, add cb to end()
    wstream.end(function () { console.log('done'); });
  }
}


Date.prototype.toLocaleDateString = function () {
  var d = new Date();
  return (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear();
};
