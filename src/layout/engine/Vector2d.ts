export class Vector2d {
  constructor(
    readonly x1: number,
    readonly y1: number,
    readonly x2: number,
    readonly y2: number,
  ) {
  }

  get length() {
    return Math.sqrt(this.dx ** 2 + this.dy ** 2)
  }

  get dx(): number {
    return this.x2 - this.x1
  }

  get dy(): number {
    return this.y2 - this.y1
  }

  public rotate(degree: number): Vector2d {
    function degToRad(deg: number) {
      return deg * Math.PI / 180
    }

    const x1 = this.x1
    const y1 = this.y1
    const th = degToRad(degree)

    const rotate = {
      real: Math.cos(th),
      imaginary: Math.sin(th),
    }
    const rotated = multiply({real: this.dx, imaginary: this.dy}, rotate)
    return new Vector2d(x1, y1, x1 + rotated.real, y1 + rotated.imaginary)
  }

  public negate(): Vector2d {
    const x1 = this.x1
    const y1 = this.y1
    return new Vector2d(x1, y1, x1 - this.dx, y1 - this.dy)
  }

  public reverse(): Vector2d {
    return new Vector2d(this.x2, this.y2, this.x1, this.y1)
  }

  public move(dx: number, dy: number): Vector2d {
    return new Vector2d(this.x1 + dx, this.y1 + dy, this.x2 + dx, this.y2 + dy)
  }

  public normalize(): Vector2d {
    const d = this.length
    return new Vector2d(0, 0, this.dx / d, this.dy / d)
  }

  public multiple(n: number): Vector2d {
    const x1 = this.x1
    const y1 = this.y1
    return new Vector2d(x1, y1, x1 + this.dx * n, y1 + this.dy * n)
  }
}

export interface ComplexNumber {
  real: number,
  imaginary: number,
}

export function multiply(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return {
    real: (a.real * b.real) - (a.imaginary * b.imaginary),
    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  }
}
