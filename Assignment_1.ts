function formatString(text: string, toUpper: boolean = true): string {
  return toUpper ? text.toUpperCase() : text.toLowerCase();
}

const res1 = formatString("Hello");
const res2 = formatString("Hello", true);
const res3 = formatString("Hello", false);

// console.log(res1, res2, res3);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const res4 = filterByRating(books);

// console.log(res4);

function concatArr<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

const res5 = concatArr(["Mr.X", "Mr.Y"], ["Mr.Z"]);
const res6 = concatArr([1, 2], [3, 4], [5]);

// console.log(res4, res5);

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
const res7 = myCar.getInfo();
const res8 = myCar.getModel();

// console.log(res6, res7);

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

const res9 = processValue("hello");
const res10 = processValue(10);

// console.log(res8, res9);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  let mostExpensive = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }
  return mostExpensive;
}

const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

const res11 = getMostExpensiveProduct(products);

// console.log(res10);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Friday || day === Day.Saturday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

const res12 = getDayType(Day.Saturday);
const res13 = getDayType(Day.Thursday);

// console.log(res11, res12);

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("The Number is Negative"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// const res13 = squareAsync(4).then(console.log).catch(console.error);
// const res14 = squareAsync(-3).then(console.log).catch(console.error);
