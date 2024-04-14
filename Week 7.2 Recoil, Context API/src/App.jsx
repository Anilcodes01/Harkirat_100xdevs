import { useContext } from "react";
import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./Store/atoms/Count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
     
    </div>
  );
}

function CountRenderer({}) {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  
 
  return <div>
    {isEven ? 'It is even' : 'It is odd'}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-renders");
  return (
    <div>
      <button
        onClick={() => {
          setCount(function (count) {
            return count + 1;
          });
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(function (count) {
            return count - 1;
          });
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
