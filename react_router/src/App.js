import React from "react";
import './Overridding.css';
import logo2 from './logo2.png';
import logo1 from './logo1.gif';
import logo from './logo.png';
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
    sidebar: () => <div>Preferred Veg!</div>,
    main: () =>
      <div style={{ background: "lightyellow", width: "200%", padding: "20px", }}>
        <h4>Veg-Meals</h4>
        <h4>Veg-Biryani</h4>
        <h4>Veg-Fried-Rice</h4>
        <h4>Veg-Manchuria</h4>
        <h4>Soya Rice</h4>

      </div>
  },
  {
    path: "/non-veg",
    sidebar: () => <div>preferred non-veg!</div>,
    main: () =>
      <div style={{ background: "lightgreen", width: "200%", padding: "20px", }}>
        <h4>Chicken-65</h4>
        <h4>Chicken-biryani</h4>
        <h4>Chicken-fried-rice</h4>
        <h4>mutton-fried-rice</h4>
        <h4>Chicken dum biryani</h4>
      </div>
  },
  {
    path: "/salads",
    exact: true,
    sidebar: () => <div>preferred Salads!</div>,
    main: () =>
      <div style={{ background: "lightpink", width: "200%", padding: "20px", }}>
        <h4>The Wedge</h4>
        <h4>ceasar salad</h4>
        <h4>crab</h4>
        <h4>veggie salad</h4>

      </div>
  },
  {
    path: "/deserts",
    sidebar: () => <div>preferred deserts!</div>,
    main: () =>
      <div style={{ background: "aqua", width: "200%", padding: "20px", }}>
        <h4>pannacotta</h4>
        <h4>fruit jelly</h4>
        <h4>cup cakes</h4>
        <h4>pan cakes</h4>
        <h4>Banoffe pie</h4>
      </div>
  },
  {
    path: "/softdrinks",
    sidebar: () => <div>preferred Soft drinks!</div>,
    main: () =>
      <div style={{ background: "orange", width: "200%", padding: "20px", }}>
        <h4>pepsi</h4>
        <h4>coca cola</h4>
        <h4>mango jucie</h4>
        <h4>sprite</h4>
        <h4>orange</h4>
      </div>
  },
  {
    path: "/icecreams",
    sidebar: () => <div>preferred icecreams!</div>,
    main: () =>
      <div style={{ background: "lightgray", width: "200%", padding: "20px", }}>
        <h4>choclate</h4>
        <h4>vanilla</h4>
        <h4>strawberry</h4>
        <h4>grape</h4>
        <h4>cone</h4>
      </div>
  },

];

export default function App() {
  return (
    <Router>
      <div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "",
            color: "whitesmoke",
            padding: "30px",
            width: "100%",
            background: "skyblue"
          }}
        >
          <div>
            <img src={logo1} className="logo" alt="logo" />
            <h1> N&R son's Restaurtant</h1>
          </div>
        </div>


      </div>
      <div>

        <ul style={{ backgroundcolor: "paleblue", listStyleType: "none" }}>

          <li>
            <Link to="/menu"><img src={logo} className="home" alt="logo" /></Link>
          </li>
          <li>
            <Link to="/back"><img src={logo2} className="back" alt="logo" /></Link>
          </li>
        </ul>

        <Switch>
          <Route path="/back">
            <Back />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
      </div>


    </Router>
  );
}
function Back() {
  return <h2></h2>;
}


function Menu() {
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

          <ul style={{ listStyleType: "none", padding: "-10px" }}>
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
              <Link to="/softdrinks">Soft-drinks</Link>
            </li>
            <li>
              <Link to="/icecreams">ice creams</Link>
            </li>
            <li>
              <Link to="/back">Back</Link>
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


        <div style={{ padding: "10px" }}>
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

