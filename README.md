# React js 😎

# Parcel
- Dev build
- Local Server
- HMR - Hot Module Relacement
- File watching alsgorithm (written in c++)
- caching - faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- consistent haashing
- Code splitting
- Different bundling - support older browser
- Diagnostic
- Error handling
- HTTPs

# Our App 
/*
Header
    - logo
    - Nav-items
Body
    - Search
    - RestaurantContainer
    - RestaurantCard
Footer
    - Copyright 
    - Links
    - Address
    - Contact
*/

# two types of import and export

- default
    - export default "component name"
    - import "component" from path
- Named
    - export before the name of the component or object
    - import {component or object} from path 

# You can play with static data also

# React Hookes
- Normal utility function
- useState() => superPowerful react variable
- useEffect()

# Whenever a state variable changes , react will rerender components
# React is fast because of Parcel or babel or you can say react does very fast DOM operation and efficient DOM manipulation because it has virtual DOM
# React uses ReConciliation (React fiber)


# Virtual DOM
- Representation of actual DOM
- It's an react element like body or anything
- So basically react creates a virtual DOM

# React's Diff Algorithm
- Basically there is two virtual DOM and react compares both the object and find the difference between them then it reflects that change in UI, this is very fast operation 
- Comparing two virtual DOM trees and then reflecting that change in the UI

# Read about Optional chaining

# Shimmer
# React Router DOM

# 2 types of routing
- Client side routing
- Server side routing

# Dynamic Routing

# Calss based component
- super(props)

# componentDidMount is used to make an API call

# react lifecycle
- parent constructor
- parent render
  - all the child's [constructor + render  -> in sequence]
  - all the child's [componentDidMount  -> in sequence]
- parent componentDidMount

# Custom Hooke
- for having a single responsibility

# Chunking
# Dynamic bundling
# Code splitting
# Dynamic import
# Lazy loading
- Suppose we also have a webpage dedicated to grocery delivery; in that case, we'll separate it onto another page, requiring the creation of a distinct bundle for the grocery delivery web application.
- In essence, if you have two web applications and want to combine them, you'll need to create separate bundles for each of the distinct web applications.

# Adding style to the react component
- Normal way to add style to our component
- Saas/Scss
- Style component => majorly used in react
- Material UI
- Bootstrap
- Chakra UI
- Ant Design
- Tailwind CSS

# Higher order component

# Data and UI layer
- UI is powered by data layer
- Managing  the data layer is more important

# Accordion
- accordion header
- accordion data

- we want that if i apply accordion to one title others must be wrapped off for that we need to give control of showing items to Restaurantmenu instead of ItemList

# Controlled and Uncontrollled component

# Lifting the state Up

# React Context
    # Props drilling
    - basically agar hame ek data ko different different component me use krna hota hai to we need to just pass the data by one component to another component sometimes kisi component me use nhi bhi ho raha hota phir bhi we pass the data as "props" then pass that data to the next component as whole react work as tree . It is somehow a problem and it is known as "Props drilling". Isse bachne k liye react provided us something cool API known as "react context API" which effectively produce a global variabes that can be passed around.
- Two ways
    - In functional component we have "useContext"
    - In Class based component "<usercontext(any name).consumer><usercontext(any name).consumer />"
- UserContext Provider is like ...whatever component u have written inside -> Uske andr ka wo change krega means sirf uske liye hi wo global variable k jaisa act krega  

# React - Redux
# Redux Toolkit
- install @reactjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- slice (cart slice)
- dispatch (action)
- selector (A hook comes from react redux library)

- Redux is not mandatory
- For small and mid size application we don't need to use redux
- Redux is different (library) than react
- Debugging is easier after using readux

- when we tap add button then it dispatch an action then it calls a reducer function that modifies the redux store (cart slice)
- subscribing the store
    - cart slice (in redux store) will change the react element(cart) using selector

# Read about react dev tools
# Read about RTK query