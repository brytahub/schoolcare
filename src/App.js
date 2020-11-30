import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './routes/index'
import StudentsCreatePage from './routes/students/create'
import PageLayout from "./components/layouts/PageLayout"

function App() {
  return (
    <Router>
      <PageLayout>
      <Switch>
        <Route exact path={["/", "/students"]}>
          <Homepage />
        </Route>
        <Route path="/students/create">
          <StudentsCreatePage />
        </Route>
      </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
