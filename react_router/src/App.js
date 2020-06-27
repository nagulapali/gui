import React from "react";
import './Overridding.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const routes = [
  {
    path: "/veg",
    exact: true,
    sidebar: () => <div>veg</div>,
    main: () =>
    <div>
    <h3>veg-meals</h3>
   
    <tb>
    <h3>veg-meals</h3>
    </tb>
    <h3>veg-meals</h3>
    </div>
    
 
  
  
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default function App() {
  return (
    <Router>
      <h1> N&R son's Restaurtant</h1>
      <div>
        <ul style={{ listStyleType: "none", padding: "10px" }}>
          
          <li>
            <Link to="/topics">Home</Link>
          </li>
          <li>
            <Link to="/back">Back</Link>
          </li>
        </ul>

        <Switch>
        <Route path="/back">
            <Back />
          </Route>
          
          <Route path="/topics">
            <Topics />
          </Route>
          </Switch>
        
        </div>
    </Router>
  );
}
function Back() {
  return <h2></h2>;
}


function Topics() {
  let match = useRouteMatch();

  return (
    <Router>

       <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "10%",
            background: "#f0f0f0"
          }}
        >
    
      <h2>Menu</h2>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/veg">veg</Link>
        </li>
        <li>
          <Link to="/non-veg">non-veg</Link>
        </li>
        <li>
          <Link to="/deserts">desserts</Link>
        </li>
        <li>
          <Link to="/Salads">Salads</Link>
        </li>
        <li>
          <Link to="softdrinks">Soft-drinks</Link>
        </li>
        <li>
          <Link to={`${match.url}/icecreams`}>ice creams</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
        
      
      <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
          </div>
        

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
       </div>
    </div>
    
    </Router>
  );
}

