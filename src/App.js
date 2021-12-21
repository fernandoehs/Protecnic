

import React from 'react';
import Nav from './components/Nav';
import Lateral from './components/Lateral';
import NavHamb from './components/NavHamb';
import { Toaster } from "react-hot-toast"



function App() {

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="container p-4">
      <NavHamb/>
      <Toaster position="bottom-left" gutter={56} />
      <div row>  
      </div>

    </div>
   
      
  );
}

export default App;
