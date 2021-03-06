export class Point2D {
    private coords;

    public constructor(x: number, y: number) {
        this.coords = [x, y] as [number, number];
    }

    *[Symbol.iterator]() {
        yield* this.coords;
    }

    public get 0() {
        return this.coords[0];
    }

    public get 1() {
        return this.coords[1];
    }

    public set 0(value: number) {
        this.coords[0] = value;
    }

    public set 1(value: number) {
        this.coords[1] = value;
    }

    public get x() {
        return this.coords[0];
    }

    public get y() {
        return this.coords[1];
    }

    public set x(value: number) {
        this.coords[0] = value;
    }

    public set y(value: number) {
        this.coords[1] = value;
    }

    public equals(p: Point2D) {
        return this.x === p.x && this.y === p.y;
    }

    public toArray() {
        return this.coords;
    }

    public rotate(a: number, about: Point2D = Point2D.origin) {
        const s = Math.sin(a);
        const c = Math.cos(a);

        this[0] -= about[0];
        this[1] -= about[1];

        const nx = this[0] * c - this[1] * s;
        const ny = this[0] * s + this[1] * c;

        this[0] = nx + about[0];
        this[1] = ny + about[1];

        return this;
    }

    public static distance(a: Point2D, b: Point2D) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    public static from(coords: [number, number]) {
        return new Point2D(coords[0], coords[1]);
    }

    public static get origin() {
        return new Point2D(0, 0);
    }
}
