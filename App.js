import './App.css';
import {Route,Routes} from 'react-router-dom';
import Mainpage from './Mainpage/mainpage';
import  Content  from './Contentpage/content';
import Validate from './Validationpage/validate';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Mainpage/>}></Route>
     <Route path="/content" element={<Content/>}></Route>
     <Route path="/validate" element={<Validate/>}></Route>
   </Routes>
  );
}

export default App;

