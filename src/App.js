import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
/* 
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'Yoshi', age: 30 };
  const link = "https:google.com";  

   <p>Liked { likes } times</p>

        <p> { Math.random() * 10} </p>
        <a href = { link } >Google Site</a>

*/


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}


export default App;
