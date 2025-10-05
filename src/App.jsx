import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav";
import NavBar from "./Components/NavBar";
import PricingOptions from "./Components/PricingOptions";


const pricingPromise = fetch('pricingData.json').then(res=> res.json())
function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
