import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Link to={'/dashboard'}>Dashboard</Link><br/>
      <Link to={'/createNewTask'}>Task form</Link>
    </div>
  );
}

export default App;
