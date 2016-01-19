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
