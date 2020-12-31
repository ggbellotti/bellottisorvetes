import * as S from "./styles"

import React, { Component } from "react"

class ButtonPrimary extends Component {
  render() {
    return (
      <S.ButtonPrimary
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
        target={this.props.target ? this.props.target : "_self"}
      >
        {this.props.title ? this.props.title : "Button primary"}
      </S.ButtonPrimary>
    )
  }
}

class ButtonSecondary extends Component {
  render() {
    return (
      <S.ButtonSecondary
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
      >
        {this.props.title ? this.props.title : "Button secondary"}
      </S.ButtonSecondary>
    )
  }
}

class ButtonToAction extends Component {
  render() {
    return (
      <S.ButtonToAction
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
      >
        {this.props.title ? this.props.title : "Button action"}
      </S.ButtonToAction>
    )
  }
}

export { ButtonPrimary, ButtonSecondary, ButtonToAction }
