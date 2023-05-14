import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyName from './Componement/FullName';
import Photo from './Componement/Profile/ProfilePhoto';
import Navbarr from './Componement/Navbarr';
import Adress from './Componement/Profile/Adress';
import Contact from './Componement/Profile/Contact';
function App() {
  return (
    <div className='body'>
   <div>
   <Navbarr/>
    </div>
    <div className="box1">
    <div className="box2">
    <div><Photo/></div>
    <div><MyName/></div>
  </div>
      <div><Adress/></div>
      <div><Contact/></div>
</div>
</div>
);
}
export default App;
