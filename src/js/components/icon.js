import React from 'react'

export default class Icon extends React.Component {
  render(){
    return (
      <div className={this.props.className || 'icon text-center col-xs-6 col-sm-3 col-md-12'}>
        <a href={this.props.link}>
          <i className={'fa ' + this.props.name}></i>
          <h5 class="icon-text text-center">{this.props.text}</h5>
        </a>
      </div>
    )
  }
}
