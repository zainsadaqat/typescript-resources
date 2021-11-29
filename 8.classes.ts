// class Car {
//   public model: number;
//   public name: string;
//   public color: string;
//   private peopleInPolicy: string[] = [];
//   private readonly manufactureDate: string = '2020-10-01';
//   // readonly property can't be change just readonly
//   // private property only accessible inside of class
//   constructor(model, name, color) {
//     this.model = model;
//     this.name = name;
//     this.color = color;
//   }
// }

// const myCar = new Car(2020, 'Honda', 'black');

// Cleaning up the class written above
class Car2 {
  private peopleInPolicy: string[] = [];
  private readonly manufactureDate: string = '2020-10-01';
  constructor(
    public model: number,
    public name: string,
    public color: string
  ) {}
}

const myCar2 = new Car2(2020, 'Honda', 'black');
