# React Router

A dependency when implemented, will allow us to create endpoints
within our front end application

these endpoints will correspond to the endpoints within our server

the endpoints will render a particular component we wish for them to display

## Getting Started
1. Install React Router by using `npm i react-router-dom@6`

### React Router Components 

- Router
    - component that provides clean URL's 
    - a wrapper for all compnents which utilize the routing system
- Routes (formemly Switch v5 & below)
    - containers for nested tree of elements that renders the branch that best matches the current location
    - declare where each dynamic component will belong
- Route 
    - an individual route specifying component to be rendered when 
    hit
    - consists of path and element props (there are more)
    - `path` specifies route definition
    - `element`