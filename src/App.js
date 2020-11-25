import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './routes/index'
import PageLayout from "./components/layouts/PageLayout"

function App() {
  return (
    <Router>
      <PageLayout>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
