import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Add from './Components/Add';
import PageNotFound from './Components/PageNotFound';
import View from './Components/View';
import Edit from './Components/Edit';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
           {/* localhost://3000 - Admin Page  */}
           <Route path='' element={<Admin/>}/>

          {/* localhost://3000/add - Add Page  */}
          <Route path='/add' element={<Add/>}/>

           {/* localhost://3000/view/1 - View Page  */}
           <Route path='/view/:id' element={<View/>}/>

           {/* localhost://3000/edit/1 - Edit Page */}
           <Route path='/edit/:id' element={<Edit/>}/>

           {/* localhost://3000 ** - PageNotFound  */}
           <Route path='*' element={<PageNotFound/>}/>


        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
