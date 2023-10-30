/**
 * ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
 * ? INTRODUCTION TO REACT.JS
 * ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
 */

/**
 * ? ⭐️ INTRODUCTIONS
 *
 * * My name is Kayla. I do a lot of web development (full stack).
 * * Front end intern at Anduril Industries & Incoming Frontend Engineer at Ramp (All thanks to React 🙏)
 *
 * ? Tell me about your experience with web development or programming?
 *
 */

/**
 * ? ⭐️ Why React?
 *
 * ! Demo 1: Vanilla Javascript is hard to work with
 * * Big complex projects. 🤮
 * * There is a lot of code repetition, violates DRY (Do not repeat
 * * yourself).
 *
 * * React is a Javascript library that makes web development easier
 *
 * * Lots of companies use React. It's the most popular frontend
 * * framework. Learn React = Get a Job
 *
 * * What is required before starting to know React?
 * * Basic web development knowledge is helpful (CSS, HTML)
 * * Basic Javascript
 * * ES6 Javascript Syntax (We'll be going over this today)
 *
 */

/**
 * ? ⭐️ SET UP
 *
 * * Download Node.js: https://nodejs.org/en/download
 * * Download VSCode: https://code.visualstudio.com/
 * * Download VSCode's Prettier Extension
 *
 */

/**
 * ? ⭐️ Let's get started with some React
 */

/**
 * ? ⭐️ Folder structure of a React app
 *
 * * package.json - Contains info about project and lists dependencies or packages in your project (similar to requirement.txt for Python)
 *
 * * /public - Contains static files, put images here
 *
 * * index.html ---
 *
 * * React is a single page app, the entire app will be in one HTML file.
 *
 * * When a React app loads, the entire app is inserted in the div, with the ID of "root" in the index.html file.
 *
 * * We are not creating different files for different pages, it will exist within one index.html file
 *
 * * Why? The benefit if that when the page loads, the user will only need to download files once. Once the initial load is done, website is pretty fast!
 *
 * * main.jsx - Where the react app is inserted into the root div
 */

/**
 * ? ⭐️ Let's start the app, type "npm run dev" in the /dandyhacks folder
 * * Now we are seeing the React app inserted into the index.html
 */

/**
 * ? ⭐️ Where is the React app that is being displayed?
 * * main.jsx is attached the App.jsx component
 */

/**
 * ? ⭐️ What is a component?
 * * A component is essentially a function of HTML
 *
 * * React also have hot reloading, so make a change and save the file to see your changes
 */

/**
 * ? ⭐️ Functions in React
 *
 * * 1. Named functions
 *
 * function nameOfFunction(parameter) {
 *  return parameter
 * }
 *
 */

// Example: function sayHello(name) {} - Returns "Hello" + name

// Answer:
/**
 * function sayHello(name) {
 *  return "Hello " + name;
 * }
 * console.log(sayHello("Kayla"));
 */

/**
 * ? ⭐️ Functions in React
 *
 * * 2. Anonymous functions (lambda functions, arrow function)
 *
 * const variableName = (parameter) => {
 *  return parameter
 * }
 *
 * Why? Sometimes you don't want to write `function functionName(){}`
 * It's so much quicker to write () => {}
 */

// Answer:
/**
 * const sayHello = (name) => {
 *  return "Hello " + name;
 * }
 * console.log(sayHello("Kayla"));
 *
 * function onEat(person, eating) {
 *  console.log(Person + " is eating")
 *  eating()
 * }
 *
 * onEat("Kayla", () => { console.log("Finished the Pizza" )})
 * onEat("Kayla", function onEat() { console.log("Finished the Pizza" )})
 *
 */

/**
 * ? ⭐️ What is JSX?
 * * JSX, stands for Javascript in XML
 *
 * * A component is a Javascript
 * * function that returns HTML
 *
 * * This isn't Javascript or HTML, it's a combination called JSX, easily mix JS with HTML
 *
 */

/**
 * ? ⭐️ Displaying variables in JSX
 *
 * * Different types of ways to declare variables in Javascript
 *
 * * const - variable that isn't going to change, block scope
 *
 * * let - variable that can change, block scope
 *
 * * var - is able to change, declared in global scope
 *
 * * It's standard to use const or let, and to avoid var since it's in the global scope, you can accidently change something you don't mean to
 *
 * ! Demo 1: Let's display our name in the React app
 *
 * * Using {}, allows us to put Javascript in our HTML code
 *
 * * Having a variable, allows us to use the same value multiple names
 *
 * ! Demo 2: We can also set HTML to variables 😱
 *
 * ! Demo 3: Let's try and create a list of users.. notice how it's getting pretty ugly
 *
 */

// Answers:
/**
 * Demo 1:
 * function App() {
  const name = "Kayla";
  return <p>This is {name}s React app</p>;
}

 * Demo 2:
function App() {
  const name = <p>Kayla</p>;

  return (
    <div>
      {name}
      {name}
      {name}
    </div>
  );
}
 * Demo 3:
function App() {
  const name = <p>Kayla</p>;
  const age = <p>22</p>;
  const name2 = <p>Pineapple</p>;
  const age2 = <p>12</p>;

  const user1 = (
    <div>
      {name} {age}
    </div>
  );

  const user2 = (
    <div>
      {name2} {age2}
    </div>
  );

  return (
    <div>
      {user1} {user2}
    </div>
  );
}

 */

/**
 * ? ⭐️ Creating components
 *
 * * Notice how the user variables are returning () around the HTML, this means that it's returning JSX
 *
 * * There's a better way to share logic, we can create components
 *
 * ! Demo 1: What's the difference between a function and component?
 *
 * * Components are always TitleCase
 *
 * * Components will always return UI
 *
 * * Why components? Components are used all the time in React.
 *
 * * Anytime you have a piece of code you want to reuse or organize in a certain way, you will always do this using components
 *
 * ! Demo 2: Create User component
 *
 * * Using components in other components requires a syntax similar to HTML tags
 *
 * * Our code looks a lot better!
 *
 * ! Demo 3: How can we make a component display dynamic data?
 *
 * * In normal functions you can pass arguments, in React you can do the same with components, called props
 *
 * * Props is a Javascript object that all React components accept as a parameter
 *
 * * We can pass any kind of data we want
 *
 * * Really easy to write code to make it dynamic, with minimal changes to how it's implemented! 😱😱
 *
 * ! Exercise: Create a component for Job information called <Job />, which takes in position (string) and salary (number)
 */

// Answers:
/** 
 * Demo 1:
 * const getName = () => {
  return "Kayla";
};

const GetNameComponent = () => {
  return <h1>Kayla</h1>;
};

Demo 2:
function App() {
  return (
    <div>
      <User />
      <User />
      <User />
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h1>Kayla</h1>
      <p>Age 22</p>
    </div>
  );
};

Demo 3:
function App() {
  return (
    <div>
      <User name="Kayla" age={123} />
      <User name="Kayla2" age={312} />
      <User name="Kayla2" age={383} />
    </div>
  );
}

// What does prop object look like?

const props = {
  name: "Kayla",
  age: 123,
};

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
};

 */

/**
 * ? ⭐️ CSS
 *
 * ! Demo 1: creating App.css, setting the color to read
 *
 * * Can import CSS files on top of component
 *
 * * Instead of class, use className
 */

// Answers
/**
 * const User = (props) => {
  return (
    <div>
      <h1 className="color">{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
};
 */

/**
 * ? ⭐️ Ternary Operators
 *
 * * Commonly used to write conditional statements in React
 *
 * * Ternary is a shorthand notation for if, else statements
 *
 * ! Demo 1: Create conditional statements to determine if someone is over or under 18
 *
 * * Ternaries are important for conditional rendering
 *
 * ! Demo 2: Conditional rendering in React with Terniary
 *
 * ! Demo 3: Using &&, Double ampersand, to render (if statement)
 */

// Answers
/**
 * Demo 1: let age = 23;

if (age >= 18) {
  console.log("Over 18!");
} else {
  console.log("Under 18! ");
}

age >= 18 ? console.log("Over 18!") : console.log("Under 18! ");

Demo 2:
function App() {
  const age = 23;

  if (age >= 18) {
    return <p>Over age!!!</p>;
  }

  return <div>Under age</div>;
}
function App() {
  const age = 13;

  return <div>{age >= 18 ? "Over age" : "Under age"}</div>;
}

Demo 3:
function App() {
  const isGreen = false;

  return <div style={{ color: isGreen && "green" }}>This is green</div>;
}

 */

/**
 * ? ⭐️ Lists in React
 *
 * ! Demo: Render a list of fruits
 *
 * * Javascript array functions (for Each and Map)
 *
 * * For each - for loop at exposes the element in a callback function
 *
 * * Map - allows us to change each piece of data in the array
 *
 * ! Exercise 1: Can you render down an array of fruits into a fruit component?
 *
 */

// Exercise 1:
const fruits = [
  { name: "Banana", price: 3 },
  { name: "Orange", price: 10 },
  { name: "Blueberry", age: 1 },
];

// Answers:
/**
 * Demo 1:
 * 
 * For each:
 * const fruits = ["Apple", "Pineapple", "Banana", "Tomato"];

fruits.forEach((fruit, idx) => {
  console.log(idx);
  console.log(fruit);
});

Map: 

const fruits = ["Apple", "Pineapple", "Banana", "Tomato"];
const fruits2 = fruits.map((fruit) => {
  return "My favorite fruit " + fruit;
});

console.log(fruits2);
 * 

Mapping with components:
function App() {
  const fruits = ["Apple", "Pineapple", "Banana", "Tomato"];

  return (
    <div>
      {fruits.map((fruit, index) => {
        return <h1 key={index}>{fruit}</h1>;
      })}
    </div>
  );
}

Mapping with objects:
*  const users = [
    { name: "Kayla", age: 34 },
    { name: "Kayla2", age: 44 },
    { name: "Kayla3", age: 94 },
  ];

  return (
    <div>
      {users.map((user, index) => {
        return (
          <h1 key={index}>
            {user.name}, {user.age}
          </h1>
        );
      })}
    </div>
  );

  Mapping with objects with components:
  function App() {
  const users = [
    { name: "Kayla", age: 34 },
    { name: "Kayla2", age: 44 },
    { name: "Kayla3", age: 94 },
  ];

  return (
    <div>
      {users.map((user, index) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <h1>
      {props.name}, {props.age}
    </h1>
  );
};


 */

/**
 * ? ⭐️ State in React
 *
 * * A state is variable that holds data
 *
 * * State is a special variable that when it's assign a new value, it re renders or updates the page
 *
 * ! Demo 1: How you would think changing a variable would work
 *
 * * React as onClick, or event listeners as properties of the HTML element
 *
 * * React will generate UI once, when th page loads, it doesn't know when to rerender or update
 *
 * * States tell React to rerender or update
 *
 * ! Demo 2: useState hook
 *
 * * A hook is just a function that deals with state, always starts with "use"
 *
 * ! Demo 3: Array destructuring
 *
 * ! Demo 4: useState's value and setter
 *
 * * First variable is the name of the variable you want to change
 *
 * * Second variable is the setter of what yuo want to change
 *
 * * It is convention to name it set<Name of First variable>
 *
 * * Inside of useState take's the initial value
 *
 * * This works because, React looks to see if the state's value is different from before, if it is then it will update the UI
 *
 * ! Demo 4: Create counter
 *
 */

// Answers:
/**
 * Demo 1:
 * function App() {
  let age = 0;

  return (
    <div>
      {age}
      <button
        onClick={() => {
          age++;
          console.log(age);
        }}
      >
        Increase Age
      </button>
    </div>
  );
}
 * Demo 2:
function App() {
  const [age, setAge] = useState(0);

  return (
    <div>
      {age}
      <button
        onClick={() => {
          age++;
          console.log(age);
        }}
      >
        Increase Age
      </button>
    </div>
  );
}

Demo 3:
// Array destructuring
const fruits = ["Banana", "Apple"]
const [Banana, Apple] = fruits

Demo 4:
function App() {
  const [age, setAge] = useState(0);

  return (
    <div>
      {age}
      <button
        onClick={() => {
          setAge(10);
        }}
      >
        Increase Age
      </button>
    </div>
  );
}

Demo 5:

function App() {
  const [age, setAge] = useState(0);

  return (
    <div>
      {age}
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increase Age
      </button>
    </div>
  );
}
 */

/**
 * ? ⭐️ Future resources
 *
 * * Check out this document I made for learning React and frontend development: https://docs.google.com/document/d/1UhW6zmff6siV1XubDE8342TOOr4qj4i6_d_vVu4GrxE/edit?usp=sharing
 *
 * * Opportunities on Campus: RocLab 🐝
 * * RocLab is a student led tech consultant group on campus. We make apps for University of Rochester's needs
 *
 * * I am currently leading a new version of CDCS (https://13ea67c7.cdcs.pages.dev/)
 *
 * * Link to Application https://docs.google.com/forms/u/4/d/1VGm_kzDXgy9KcC9sdgmJWQ5b8Z3UTZE-_qlowbW0DFU/edit?usp=drive_web
 *
 * * Feel free to connect with me if you have more questions:
 * * LinkedIn: https://www.linkedin.com/in/kayla-s-lin/
 *
 */
