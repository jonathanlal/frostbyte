import { FrostbyteProvider, P} from 'frostbyte';

function App() {
  return (
     <FrostbyteProvider styles={{primary: 'pink'}}>
      <P>works!</P>
     </FrostbyteProvider>
  );
}

export default App;
