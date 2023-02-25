import { FrostbyteProvider, P} from 'ui';

function App() {
  return (
     <FrostbyteProvider styles={{primary: 'pink'}}>
      <P>works</P>
     </FrostbyteProvider>
  );
}

export default App;
