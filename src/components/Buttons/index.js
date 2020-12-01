import * as S from "./styles"

import React, { Component } from "react"

class Primary extends Component {
  render() {
    return (
      <S.ButtonPrimary
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
      >
        {this.props.text ? this.props.text : "Button primary"}
      </S.ButtonPrimary>
    )
  }
}

class Secondary extends Component {
  render() {
    return (
      <S.ButtonSecondary
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
      >
        {this.props.text ? this.props.text : "Button secondary"}
      </S.ButtonSecondary>
    )
  }
}

class ToAction extends Component {
  render() {
    return (
      <S.ButtonToAction
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
      >
        {this.props.text ? this.props.text : "Button action"}
      </S.ButtonToAction>
    )
  }
}

export { Primary, Secondary, ToAction }
