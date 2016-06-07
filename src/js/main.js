var app = angular.module('app', ['ngAnimate']);

app.controller('iconController', function(){
  this.icons = [
    {
      name: 'fa-envelope-o',
      text: 'email',
      href: 'mailto:shalom.yiblet@gmail.com'
    },
    {
      name: 'fa-github',
      text: 'github',
      href: 'https://github.com/yiblet'
    },
    {
      name: 'fa-linkedin',
      text: 'linkedin',
      href: 'https://www.linkedin.com/in/shalom-yiblet-902a6aab'
    },
    {
      name: 'fa-file-pdf-o',
      text: 'resume',
      href: 'build/others/resume.pdf'
    }
  ]
})


app.controller('animationCtrl', ['$scope', function(scope){
  this.lines = [
    ''
  ]
  var lines = this.lines;

  this.nextLines = [
    "vim shalom.js",
    "",
    "var shalom = {",
    "    'status': 'freshman',",
    "    'major': 'computer science',",
    "   'favorite_animal': 'echidna',",
    "}",
    ':wq'
  ]

  var x = Math.floor(Math.random() * 7)
  var v = "";
  switch (x) {
      case 0:
          v = "    'favorite_pizza': 'papa johns'"
          break;
      case 1:
          v = "    'favorite_show': 'House of cards'"
          break;
      case 2:
          v = "    'favorite_author': 'Douglas Adams'"
          break;
      case 3:
          v = "    'favorite_starcraft_race': 'zerg'"
      case 4:
          v = "     'height' : '5ft 9in'"
          break;
      case 5:
          v = "    'favorite_number': 5"
          break;
      case 6:
          v = "    'favorite_cereal': 'Cinnamon Toast Crunch'"
          break;
      default:
          v = "    'favorite_starcraft_race': 'zerg'";
  }

  this.nextLines[5] = v;

  this.run = function(){
    var newLine = true;
    var cont = true;
    var lastLine = lines.length - 1;
    var nextLines = this.nextLines;
    console.log(lines)
    console.log("run");

    var writeLine = function(){
      if (nextLines[0] == "") {
        if (nextLines.length > 0){
          nextLines.shift();
          lastLine += 1;
        }
        if (nextLines.length != 0){
          lines.push('')
        }
        scope.$apply();
        cont = true;
      }else{
        cont = false;
        var c = nextLines[0].charAt(0)
        nextLines[0] = nextLines[0].slice(1)
        lines[lastLine] = lines[lastLine] + c;
        //console.log(lines, lastLine)
        //TODO check if this next line is needed
        scope.$apply();
        setTimeout(writeLine, Math.floor(Math.random() * 100 + 40))
      }
    }

    var addNewLine = function(){
      console.log('cont')
      if (cont) {
        if (nextLines.length > 0){
          writeLine();
          setTimeout(addNewLine, Math.floor(Math.random() * 500 + 1000))
        }
      }else if(nextLines.length > 0){
        setTimeout(addNewLine, Math.floor(Math.random() * 500 + 1000))
      }
    }
    setTimeout(addNewLine, 499)
  }

  this.run()

  this.clear = function() {
    clearInterval(this.interval)
  };
}])

app.directive('blog', [function(){
  return {
    restrict: 'EA',
    scope: {
      'loc': '='},
    templateUrl: function(elem, attr){
      return attr.loc;
    }
  }

}])

module.export = app;
