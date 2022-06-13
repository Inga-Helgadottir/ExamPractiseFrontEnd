# react notes

rafce = makes the function for js like this

```javascript
import React from 'react'
const ComponentName = () => {
  return (
    <div>
      
    </div>
  )
}
export default ComponentName 
```

## create react app with vite
npm create vite@latest
cd nameOfApp
code .

## start and end project
Start project on localhost
npm run dev
To stop
Ctrl + C

## components

```javascript
import ComponentName from "./components/componentName";

const ComponentName = () => {
  return (
    <div>
      <ComponentName/>
    </div>
  )
}
export default ComponentName 
```

## Pass parameters

```javascript
import PropTypes from "prop-types";

const App = () => {
  return (
    <div>
      <Header title="putTitleHere"/>
    </div>
  )
}
```

## Handle parameters

```javascript
const Header = ({ title }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
```

## styles

```javascript
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div style={headingStyle} className="thisIsClass">
		<p>hello</p>
	</div>>
  );
};

const headingStyle = {
   color : "red",
   backgroundColor: "black",
}
```

## if else

```javascript
Simple
{boolean ? "yes" : "no"}

Complex
{location.pathname === "/" && (
   <Button
     color={showAdd ? "red" : "green"}
     text={showAdd ? "Close" : "Add"}
     onClick={onAdd}
   />
 )}
```

## links

```javascript
npm I react-router-dom

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="./about">About</Link>
    </footer>
  );
};
```

## Fetch
```javascript
CREATE

const addTask = async (task) => {
const res = await fetch(`http://localhost:5000/tasks`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(task),
});
const data = await res.json();

UPDATE

const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(updatedTask),
});
const data = await res.json();

READ
const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();
  return data;
};

DELETE

const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
     method: "DELETE",
  });
};
```

## useEffect

```javascript
What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

import { useState, useEffect } from "react";

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks();
    setTasks(tasksFromServer);
  };
  getTasks();
}, []);
```

## useLocation

```javascript
Use location checks where on the site we are 
"/" == http://localhost:3000/
"/about" == http://localhost:3000/about


npm I react-router-dom


import { useLocation } from "react-router-dom";


const location = useLocation();


{location.pathname === "/" && (
   <Button
    color={showAdd ? "red" : "green"}
    text={showAdd ? "Close" : "Add"}
    onClick={onAdd}
   />
 )}
 ```

 ## icons npm I react-icons

https://react-icons.github.io/react-icons/icons?name=fa

```javascript
import { FaTimes } from "react-icons/fa";

<FaTimes
   style={{ color: "red", cursor: "pointer" }}
   onClick={() => onDelete(task.id)}
/>
```

## map

```javascript
tasks.map((task) =>
  task.id === id ? { ...task, reminder: data.reminder } : task
)
```

## onClick

```javascript
const Header = ({ onAdd }) => {
  return (
    <header>
        <Button
          onClick={ onAdd }
          onDoubleClick={() => onToggle(task.id)}
        />
    </header>
  );
};

<Header
  onAdd={() => onClickFunction(parameter)}
  onToggle={functionNameForOnToggle}
/>

const [parameter, onClickFunction] = useState(false);
OR
const [parameter, onClickFunction] = useState([]);

In the () is the initial state
The first one shows a boolean
The second one shows an array
```

## onSubmit

```javascript
const onSubmit = (e) => {
    e.preventDefault();
        More function stuff here 
};

return (
  <form className="add-form" onSubmit={onSubmit}>
	<input
       type="text"
       placeholder="Add Task"
       value={text}
       onChange={(e) => setText(e.target.value)}
      ></input>
    <input type="submit" value="Save Task"/>
  </form>
);
```

## faivon

```javascript
import img from "./pokemon.png";

var link = document.createElement("link");
link.type = "image/png";
link.rel = "icon";
link.href = img;
document.getElementsByTagName("head")[0].appendChild(link);
```