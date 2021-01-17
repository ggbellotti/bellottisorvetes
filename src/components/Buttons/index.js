import * as S from "./styles"

import React, { Component } from "react"

class ButtonPrimary extends Component {
  render() {
    return (
      <S.ButtonPrimary
        cover
        bg="#2B1500"
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
        className={this.props.className}
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
        cover
        bg="#FFE4C4"
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
        className={this.props.className}
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
        cover
        bg="#FFE4C4"
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
        className={this.props.className}
      >
        {this.props.title ? this.props.title : "Button action"}
      </S.ButtonToAction>
    )
  }
}

export { ButtonPrimary, ButtonSecondary, ButtonToAction }
