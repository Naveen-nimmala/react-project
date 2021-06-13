import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import SinglePost from "./pages/singlePage/SinglePost";
import Compose from "./components/Compose";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/compose">
          <Compose />
        </Route>
        <Route path="/post/:id">
          <SinglePost />
        </Route>

        {/* <Route path="/posts/">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
