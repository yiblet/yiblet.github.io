import React from 'react'

class Icon extends React.Component {
  render(){
    return (
      <div className={this.props.className || 'icon-container icon text-center col-xs-6 col-sm-3 col-md-12'}>
        <a href={this.props.link}>
          <i className={'fa ' + this.props.name}></i>
        </a>
      </div>
    )
  }
}

export default class IconList extends React.Component {

  state = {icons : [
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
    },
    {
      name: 'fa-envelope-o',
      text: 'email',
      link: 'mailto:shalom.yiblet@gmail.com'
    }
  ]
  }

  generateIcons = () => {
    var result = [];
    var count = 0;
    for (let iconProps of this.state.icons) {
      iconProps.className = 'icon-container icon text-center col-xs-3 col-md-3'
      iconProps.key = count;
      count++;
      result.push((<Icon {...iconProps}/>));
    }
    return result;
  }


  render() {
    return (
      <div className="clearfix col-xs-12 col-md-2 col-md-offset-10">
        {this.generateIcons()}
      </div>
    )
  }
}
