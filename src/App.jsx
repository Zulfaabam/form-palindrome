import { useContext } from "react";
import "./App.css";
import Form1 from "./components/Form1";
import { AppContext } from "./context";
import Form2 from "./components/Form2";

function App() {
  const { state, setState } = useContext(AppContext);

  console.log("appContext", state);

  return (
    <>
      <Form1 />
      {state.isForm2Open ? (
        <Form2
          open={state.isForm2Open}
          onClose={() =>
            setState((prev) => ({
              ...prev,
              isForm2Open: false,
            }))
          }
        />
      ) : null}
    </>
  );
}

export default App;
