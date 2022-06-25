import { Header } from "./Header";
import "./index.css";
import { Container } from "./Container";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Container />
    </div>
  );
}

export default App;
