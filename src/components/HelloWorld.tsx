import { useState } from 'react';


const HelloWorld = (): JSX.Element => {

  const [ counter, setCounter ] = useState(0);

  const handleClick = (): void => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1 className="bg-red-100 text-sky-800 underline font-bold text-5xl">Hello there</h1>
      <button onClick={ handleClick }>You have clicked this button { counter } times</button>
    </>

  );
};

export default HelloWorld;
