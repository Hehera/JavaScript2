const user = {
   id: 1,
   name: 'Sam Green',
   age: 20
}
const keys = Object.keys(user)
// console.log(keys)
keys.forEach(key => {
   //    console.log(user[key])
})

// The course detail(x) is Learn JavaScript(y)(course.name)

const getCourseDetail = (course, detail) => {
   return `The course ${detail} is ${course[detail]}`
}
// console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "name")); // "The course name is Learn JavaScript"
// console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "year")); // "The course year is 2021"

const settings = {
   id: 1,
   name: 'Learn JavaScript',
   year: 2021
}
const setting = 'id'
// console.log(settings[setting]);// 1

const logValues = course => {
   Object.values(course).forEach(value => {
      return console.log(value)
   })
}
// Sample usage - do not modify
// console.log(logValues({id: 1, name: "Learn JavaScript", year: 2021}));

const translations = {
   welcome: {
      dutch: 'Welkom',
      french: 'Bienvenue',
      english: 'Welcome'
   }
}
const getTranslation = language => {
   //    console.log(translations)
   //    console.log(language)
}
// console.log(getTranslation());

const getUpperCasedValues = course => {
   return Object.values(course).map(value => {
      return value.toUpperCase()
   })
}



// Sample usage - do not modify
// console.log(getUpperCasedValues({name: "Learn JavaScript"})); // ["LEARN JAVASCRIPT"]
// console.log(getUpperCasedValues({name: "Learn JavaScript", category: "Programming"})); // ["LEARN JAVASCRIPT", "PROGRAMMING"]
// console.log(getUpperCasedValues({})); // []




const firstOne = false
const secondOne= true

const settings2 = {
    firstOne,
    secondOne,
}
// console.log(settings2);

// Debugging tip

const sum = (a, b) => {
   console.log({a})//такий запис дає нам не просто бачити результат,але й зміну,яка дала цей результат
   console.log({b})
   let total = a + b
   console.log({total})
   return total
}

// sum(1, 3)   


const config = {
   id: 1,
   isAdmin: false,
   theme: {
      dark: false,
      accessibility: true
   }
}

// const logged = config.theme.dark
// This can be refactored with object destructuring as follows:

// const {theme,id,isAdmin} = config
const {id, isAdmin, theme} = config;
// console.log(id,isAdmin,theme);



const { a: aa = 10, b: bb = 5 } = { a: 3 };

// console.log(aa); // 3
// console.log(bb); // 5

const firstPerson = {
    name: "Sam",
    age: 18
}

const secondPerson = {
    age: 25,
    type: "admin"
}

const mergedObjects = {...firstPerson, ...secondPerson};
// console.log(mergedObjects);
// Notice how the new object ended up with the name and type from both objects. However, regarding the age, since it exists in both objects, only the 2nd one persisted.
// This is why the order of the objects matters when spreading them.


const person = {
    name: "Alex",
    age: 35
};

if ("name" in person) {
    // console.log(person.name);
}


const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay.`,
    };
    
    return messages[booking.status] ?? "Unknown booking status.";
}




const name = "Sam";
const number = 0;

if (name) {
    console.log("First condition");//First condition
}

if (number) {
    console.log("second condition")// null
}
