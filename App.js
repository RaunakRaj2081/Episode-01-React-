const heading = React.createElement("h1",{id : "heading" , xyz : "abc"}, "Hello world from React!");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);

    // heading is an object
    // render takes the heading object and converts it into h1 and gives it to DOM

// creating nested h1 using react

/* <div id= "parent">
<div id= "child">
   <h1>I'm h1 heading</h1>
   <h2>I'm h2 heading</h2>
</div>

<div id= "child">
   <h1>I'm h1 heading</h1>
   <h2>I'm h2 heading</h2>
</div>

</div>  */

const parent = React.createElement( "div", {id:"parent"},
[
    React.createElement("div",{id:"child"},
[React.createElement("h1", {}, "I'm a h1 heading"),
React.createElement("h2", {}, "I'm a h2 heading")
]),
React.createElement("div",{id:"child"},
[React.createElement("h1", {}, "I'm a h1 heading"),
React.createElement("h2", {}, "I'm a h2 heading")
]),
]);

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(parent);