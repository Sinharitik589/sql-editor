import { Row , Col } from "react-bootstrap"
import Sidebar from "./components/sidebar/Sidebar"
import Main from "./pages/Main"
import "./App.css"

function App() {
  return (
    <div className="vh-100 vw-100">
      <Row className="w-100 h-100 gx-0">
        <Col md={2}>
          <Sidebar/>
        </Col>
        <Col md={10}>
          <Main/>
        </Col>
      </Row> 
    </div>
  );
}

export default App;
