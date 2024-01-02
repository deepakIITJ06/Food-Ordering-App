import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id : "heading"},"Hello world from react !");
// Here {} is basically for alloting attributes to our tags

console.log(heading);
// here heading is simply an object
// so basically createElement is creating an object

// ReactElement(object) => HTML(understandds)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id: "child"},
[React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"i am an h2 tag")]));

console.log(parent);
root.render(parent);


// JSX 

const jsxHeading  = <h1 id="heading" className="heading" tabIndex={1}>Hello World using jsx ! </h1>
console.log(jsxHeading);
root.render(jsxHeading);
// Both heading and jsxHeading are same that's why developer chose "jsx" instead of writing react.createElement

// React component
// Class based components
// functional components

// React functional components
// It's just a js function which returns some jsx


const Anotherfunc = ()=>{
    return <h2>This is just an another function</h2>
};

const HeadingComponent = () => {
    return (<div>
        {/* you can write any js thing in this curly braces */}
        <Anotherfunc />
        {/* {Anotherfunc()} */}
        {/* Both the ways are correct */}
        <h1>This is a functional component</h1></div>)
    // you can return multiple jsx also
};
root.render(<HeadingComponent/>);

// React elements
// const headingEl = (
//     <h1>This is a react element</h1>
// )