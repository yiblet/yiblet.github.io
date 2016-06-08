import React from 'react'
import Icon from './icon'


export default class IconList extends React.Component {

  state = {icons : [
    {
      name: 'fa-envelope-o',
      text: 'email',
      link: 'mailto:shalom.yiblet@gmail.com'
    },
    {
      name: 'fa-github',
      text: 'github',
      link: 'https://github.com/yiblet'
    },
    {
      name: 'fa-linkedin',
      text: 'linkedin',
      link: 'https://www.linkedin.com/in/shalom-yiblet-902a6aab'
    },
    {
      name: 'fa-file-pdf-o',
      text: 'resume',
      link: 'build/others/resume.pdf'
    }
  ]
  }

  generateIcons = () => {
    var result = [];
    for (let iconProps of this.state.icons) {
      iconProps.className = 'icon text-center col-xs-6 col-sm-3';
      result.push((<Icon {...iconProps}/>));
    }
    return result;
  }


  render() {
    return (
      <div className="clearfix col-sm-6 col-sm-offset-3">
        {this.generateIcons()}
      </div>
    )
  }
}
