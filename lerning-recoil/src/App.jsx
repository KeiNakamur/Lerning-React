import { RecoilRoot } from "recoil";
import "./App.css";
import AddTask from "./components/addTask";
import InputTask from "./components/inputTask";

function App() {
  return (
    // Recoil Root で囲む必要あり
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App;
