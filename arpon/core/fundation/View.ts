/* export class Node {}

export class Element extends Node {
  constructor() {
    super();
  }

  public body() {}
}

export class UIElement extends Element {
  public content?: string = '';
  constructor() {
    super();
  }
} */

import React from 'react';
import ViewBuilder from './abstract/ViewBuilder';

class View<P> extends React.Component<P> implements ViewBuilder {
  render() {
    return React.Fragment({});
  }
}

export { View };

export default View;
