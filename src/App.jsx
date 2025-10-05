import "./App.css";
import DaisyNav from "./Components/DaisyNav";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <hr className="mt-8" />
        <DaisyNav></DaisyNav>
      </header>
      <main></main>
    </>
  );
}

export default App;
