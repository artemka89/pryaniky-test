import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [show, setShow] = useState(false);
  const onClickButton = () => {
    setShow(true);
  };
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
      <Button variant='contained' onClick={onClickButton}>
        Click
      </Button>
      <div>{show && <div>Button is clicked</div>}</div>
    </>
  );
}

export default App;
