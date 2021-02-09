import React from 'react';

const App = () => {
  const [active, setActive] = useState(false);

  const { color, text } = {
    color: active ? 'lightgreen' : 'red',
    text: active ? 'active' : 'inactive',
  };
  return (
    <div>
      I am
      <span style={{ color }}>{text}</span>
      <button onClick={() => setActive(!active)}>Toggle</button>
    </div>
  );
};

export default App;
