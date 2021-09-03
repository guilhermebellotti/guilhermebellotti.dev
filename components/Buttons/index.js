import * as S from "./styles";

import React, { Component } from "react";

class ButtonPrimary extends Component {
  render() {
    return (
      <S.Button
        href={this.props.to ? this.props.to : "/"}
        className={this.props.className}
      >
        <ButtonPrimary
          title={this.props.title ? this.props.title : "Button primary"}
        >
          {this.props.title ? this.props.title : "Button primary"}
        </ButtonPrimary>
      </S.Button>
    );
  }
}

class ButtonSecondary extends Component {
  render() {
    return (
      <S.Button
        href={this.props.to ? this.props.to : "/"}
        className={this.props.className}
      >
        <ButtonSecondary
          title={this.props.title ? this.props.title : "Button secondary"}
        >
          {this.props.title ? this.props.title : "Button secondary"}
        </ButtonSecondary>
      </S.Button>
    );
  }
}

class ButtonToAction extends Component {
  render() {
    return (
      <S.Button
        href={this.props.to ? this.props.to : "/"}
        className={this.props.className}
      >
        <ButtonToAction
          title={this.props.title ? this.props.title : "Button action"}
        >
          {this.props.title ? this.props.title : "Button action"}
        </ButtonToAction>
      </S.Button>
    );
  }
}

export { ButtonPrimary, ButtonSecondary, ButtonToAction };
