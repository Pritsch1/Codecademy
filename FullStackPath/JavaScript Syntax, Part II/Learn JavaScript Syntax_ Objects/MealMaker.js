const menu = 
{

  _courses:{appetizers:[],mains:[],desserts:[],},

  addDishToCourse(courseName, dishName, dishPrice)
  {
    const dish = 
    {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName)
  {
    const dishes = this._courses[courseName];
    const i = Math.floor(Math.random() * dishes.length);
    return dishes[i];
    /*return this._courses[courseName][Math.floor(Math.random() * this._courses[courseName].length)];*/
  },
  generateRandomMeal() 
  {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const fullPrice = appetizer.price + main.price+ dessert.price; 
    return `Today we start off with some ${appetizer.name} followed by our main course ${main.name} and ${dessert.name} for dessert. Total of ${fullPrice}`;
  },

}
//Course Names: appetizers, mains and desserts.
//menu.addDishToCourse(courseName, dishName, dishPrice);
//Appetizer
menu.addDishToCourse("appetizers", "Apt.1", 2);
menu.addDishToCourse("appetizers", "Apt.2", 3);
menu.addDishToCourse("appetizers", "Apt.3", 5);
menu.addDishToCourse("appetizers", "Apt.4", 7);
menu.addDishToCourse("appetizers", "Apt.5", 11);
//Main
menu.addDishToCourse("mains", "Main.1", 10);
menu.addDishToCourse("mains", "Main.2", 13);
menu.addDishToCourse("mains", "Main.3", 16);
menu.addDishToCourse("mains", "Main.4", 21);
menu.addDishToCourse("mains", "Main.5", 32);
//Dessert
menu.addDishToCourse("desserts", "Dst.1", 5);
menu.addDishToCourse("desserts", "Dst.2", 7);
menu.addDishToCourse("desserts", "Dst.3", 11);
menu.addDishToCourse("desserts", "Dst.4", 12);
menu.addDishToCourse("desserts", "Dst.5", 15);

let meal = menu.generateRandomMeal();

console.log(meal);







/*get getappetizers(){return this._courses.appetizers},
  get getmains(){return this._courses.mains},
  get getdesserts(){return this._courses.desserts},
  
  set setappetizers(newappetizers){},
  set setmains(newmains){},
  set setdesserts(newdesserts){}, 

  get getcourses(){return{
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
  }},*/
