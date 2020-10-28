import React,{useState} from 'react';
import { Route } from 'react-router-dom';
import MainTop from './MainTop';
import MainMid from './MainMid';
import MainBot from './MainBot';
// import './styles.css';

function Main(){
   const [cartTourIndexData, setCartTourIndexData]= useState([]);
   const [searchKey, setSearchKey] = useState('');
   return(
      <div style={{display:"flex", flexDirection:"column"}}>
         <MainTop searchKey={searchKey} setSearchKey={setSearchKey} />
         <MainMid cartTourIndexData={cartTourIndexData}
            setCartTourIndexData={setCartTourIndexData} />
         <MainBot cartTourIndexData={cartTourIndexData}
            setCartTourIndexData={setCartTourIndexData}
            searchKey={searchKey} />
      </div>
   );
   
}
export default Main;

