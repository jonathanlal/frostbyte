import { Label, P, Switch } from 'frostbyte';
import { useState } from 'react';

function App() {
  const [on, setOn] = useState(true);
  return (
    <>
      <P color="red" size="70">
        works4!
      </P>
      <Switch
        setChecked={setOn}
        checked={on}
        label={'hello world'}
        labelFor={'switch123'}
      />

      <Label htmlFor="test" color="blue" size="26">
        test label
      </Label>
    </>
  );
}

export default App;
