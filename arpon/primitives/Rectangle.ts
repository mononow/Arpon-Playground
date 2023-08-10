import Shape from './Shape';

class Rectangle extends Shape {
  constructor() {
    super();
    throw new Error('Not implemented');
  }
}

// Alias
const Rect = Rectangle;

export { Rect };

export default Rectangle;
