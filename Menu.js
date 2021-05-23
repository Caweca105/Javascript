const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers()  {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains)  {
    this._courses.appetizers = mains;
  },
  get desserts()  {
    return this._courses.desserts;
  },
  set desserts(desserts)  {
    this._courses.appetizers = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice)  {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal()  {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'fries', 4.50);
menu.addDishToCourse('appetizers', 'wings', 5.00);

menu.addDishToCourse('appetizers', 'steak', 10.25);
menu.addDishToCourse('appetizers', 'salmon', 7.75);
menu.addDishToCourse('appetizers', 'tofu', 11.20);

menu.addDishToCourse('appetizers', 'ice cream', 3.00);
menu.addDishToCourse('appetizers', 'petit gateau', 3.00);
menu.addDishToCourse('appetizers', 'cake', 3.25);

const meal = menu.generateRandomMeal()
console.log(meal)