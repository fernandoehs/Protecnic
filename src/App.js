

import React from 'react';
import Nav from './components/Nav';
import Lateral from './components/Lateral';




function App() {

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="container p-4">

      <Nav/>
      <div row>  
      </div>

    </div>
   
      
  );
}

export default App;
