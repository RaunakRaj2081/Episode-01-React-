# Episode - 01 -----> REACT BASICS
# Episode - 02 -----> PARCEL AND BABEL AND SETUP
# Episode - 03 -----> MAKING COMPONENTS
# Episode - 04 -----> SWIGGY UI (HEADER AND BODY BASICS)
# Episode - 05 -----> SRC COPMONENTS AND HOOKS ( USESTATE AND USEFFECT)
# Episode - 06 -----> LIVE API FETCH
# Episode - 07 -----> MAKING PATHS (LINK , OUTLET , createBrowserRouter , <RouterProvider> , useRouteError)
# Episode - 08 -----> CLASS BASED COMPONENT
# Episode - 09 -----> CUSTOM HOOKS
# Episode - 10 -----> TAIKWIND CSS
# Episode - 11 -----> HIGHER ORDER COMPONENT AND CONTEXT API
# Episode - 12 -----> REDUX
# Episode - 13 -----> TEST THE CODES
# Episode - 14 ----->
# Episode - 15 ----->
# Episode - 16 -----> 


# swiggy app

/* 
 HEADER
  -- logo
  -- Nav Items
 BODY
   -- search
   -- RestaurantContainer
   -- RestaurantCard
       - img
       - name of res , star rating , cuisine , delivery tie
 FOOTER
   -- copyright
   -- Links
   -- Address
   -- contact
*/

TWO TYPES OF IMPORT/EXPORT

1) Default Export/Import (used when single component is exported)

     export dafault component;
     import component from "path";

2) Named Export/Import (used when multiple things to be exported)

      export const component;
      import {component} from path;

# React Hooks
  -- It is a normal js utility function

  1) useState() -> superpowerful state variable in react

  2) useEffect() -> called after ui is rendered

   --- if no dependency arry => useEffect is called on every render

   --- if dependency array is empty -> [] => useEffect is called on initial render(just once)

   --- if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact changes

   --- always make useState() inside a component and on the starting of the component

   --- never define useState() under if-else or loops or functions -> it creates inconsistency

   -- rafce -> to automatically create a component

   # createBrowserRouter , <RouterProvider> , useRouteError

   # children Routes -> use Outlet

   # link to = " " -> to link text to a page

   # 2 types of web routing
     1) client side Routing -> does not make any network calls , we are using it (React is single page applcn)

     2) server side Routing -> it makes network calls to the routes and gets the data then reloads the page

     # componentDidMount() -> used to make api calls in class based react (because it firstly renders the component then make api calls and get the data)
     
     --------- reder phase --------
     parent constructor
     parent render
     FirstChild constructor
     FirstChild render
     SecondChild constructor
     SecondChild render

    <DOM UPDATED - IN SINGLE BATCH>
    -------- commit phase ---------
     FirstChild component Did Mount
     SecondChild component Did Mount
     parent component Did Mount

     # lazy() -> to divide our application into chunks and wrap it inside suspense , so that our fle doesn't become too long

     # another names
     // Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamic imoprt

# css methods

1) normal css file
2) scss and saas
3) bootstrap
4) styled component 
5) material ui
6) talwind css
7) ant design
8) chakra ui

# use ctrl+enter to activate tailwind suggestions if not working

# Higher order component -> component which takes a component , enhances the component and return it

# to avoid prop drilling -> use context (it is global)
  --- createContext() ----
  ---- react hook -> # UseContext
  -- by this we can use the data anywhere in the app , without props 
  --- use context when the data is needed at multiple places 

  # Redux and React are different libraries
  -- Redux is not mandatory , use it whenever required
  --- zustand is also used , it is also a library
  -- Redux offer easier debugging
  -- It is state container for JS apps

# whenever you need to modify a cart

1) -------to write data ------

-- we can't do it directly

  -- when we click on the add button it dispatches an action , this action will calls a function (known as reducer) and the function internally updates the slice of a redux store (cart store)
   
2) ------- to read data ------

we will use selector and this selector will give the data,
this phenomenon is known as subscribing to the store. 

-- as the cart is subscribed to the store , it is automatically updated as we clicked the add button.

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector

configureStore() , provider , createSlice

appStore.js  , cartSlice.js

-- useSelector() , useDispatch()- > hook
immer -> a small library that redux toolkit uses

# TYPES OF TESTING

1) UNIT TESTING -> testing a particular section

2) INTEGRATION TESTING -> when multiple components are talking to each other (through code)

3) END TO END TESTING (E2E TESTING) -> testing from user landing to the page to the end leaving the page

# SETTING UP TESTING IN OUT APP
--- React Testing Library -> builds on top of DOM Testing Library by adding APIs for working with React components.
(not use to write commads to install if we use npx create react-app my app , already built within it)

--- React Testing Library uses jest

--- Jest is a delightful js Testing Framework with a focus on simplicity .


---1) install react testing library
---2) install jest
---3) install using babel , command form jest site , using babel section

--4) Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:



---5) parcel already uses babel and we are providing our own babel configuration , so there is a conflict , so we need to disable babel transpilation in the parcel and for that : 

(i) go to parcel documentation
(ii) go to javascript
(iii) go to babel section , usage with other tools
(iv)  create a new file .parcelrc
(v) write the code : 
      
      {
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}

---6) jest configuration -> npx jest --init
---7) install jsdom library (npm install --save-dev jest-environment-jsdom)

---8) npm i -D @babel/preset-react -> to make jsx work in test cases

---9) include @babel/preset-react inside my babel configuration

---10) npm i -D @testing-library/jest-dom

--- command 
# npm run test

__ -> dunder

__tests__ -> test case folder

--- npm run watch-test
