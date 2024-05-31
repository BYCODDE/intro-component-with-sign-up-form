import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="lg:gap-[45px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-full lg:min-h-screen lg:text-center">
      <Header />
      <Main />
    </div>
  );
}

export default App;
