import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
  useReducer,
  useRef,
} from "react";

// 2x + 1 = y;
// x为自变量  y为因变量

// 常见的7个hook： useState useEffect useMemo useReducer useContext useCallback useRef

// 自变量：useState useReducer useContext
// 因变量: useMemo  useEffect  useCallback
// 其 他:  useRef

const TestContext = React.createContext();

function Count(props) {
  return <i>{props.data}</i>;
}

function TestContextComponent() {
  const theme = useContext(TestContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      TestContextComponent
    </button>
  );
}

export default function App() {
  const [x, setX] = useState(0);
  const y = 2 * x + 1;
  // const y = useMemo(() => 2 * x + 1, [x]);
  const changeX = () => setX(x + 1);
  // const changeX = useCallback(() => setX(x + 1), [x]);
  useEffect(() => {
    document.title = x;
  }, [x]);

  const renderOdd = useRef(1);
  const isOdd = renderOdd.current % 2 === 1;
  renderOdd.current++;
  return (
    <ul>
      <li onClick={changeX}>
        x是 <Count data={x} />
      </li>
      {isOdd ? (
        <li>
          y是 <Count data={y} />
        </li>
      ) : null}

      <TestContext.Provider
        value={{
          foreground: "yellow",
          background: "red",
        }}
      >
        <li>
          测试useCotext
          <TestContextComponent />
        </li>
      </TestContext.Provider>
    </ul>
  );
}
