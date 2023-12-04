import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainPage from './Compopents/Router/MainPage';
import LoginPage from './Compopents/Router/LoginPage';
import Mobiles from './Compopents/Router/Nested/Mobiles';
import Earphones from './Compopents/Router/Nested/Earphones';
import Cameras from './Compopents/Router/Nested/Cameras';
import Laptops from './Compopents/Router/Nested/Laptops';
import Watches from './Compopents/Router/Nested/Watches';
import ProductsPage from './Compopents/Router/ProductsPage';
import Telivisions from './Compopents/Router/Nested/Telivisions';
import AboutPage from './Compopents/Router/AboutPage';
import FaqPage from './Compopents/Router/FaqPage';
import NavigationBar from './Compopents/Router/NavigationBar';
import routerStyles from './Compopents/Router/Router.module.css'
import DisplayEmp from './Compopents/Employee/DisplayEmp'
import FaqMain from './Compopents/Faqmain'
import TextAsgnmntMain from './Compopents/TextAsgnmntMain'
import FakestoreAssgn from './Compopents/FakestoreAssgn'
import MoviesAssgn from './Compopents/MoviesAssgn';
import Form1Assgn from './Compopents/Form1Assgn';
import Form2Assgn from './Compopents/Form2Assgn';
import Form3Assgn from './Compopents/Form3Assgn';
import CustomFormValidation from './Compopents/FormValidation/CustomFormValidation';
import ReactHookFormValidation from './Compopents/FormValidation/ReactHookFormValidation';
import SliderImages from './Compopents/Slider/SliderImages';
import TodoApp from './Compopents/TodoApp';
import SliderUsingCustomHook from './Compopents/CustomHooks/SliderUsingCustomHook';
import HideShowUsingCustomHook from './Compopents/CustomHooks/HideShowUsingCustomHook';
import AutomaticSlider from './Compopents/Slider/AutomaticSlider';
import UsingCustomFormHook from './Compopents/CustomHooks/UsingCustomFormHook';
import DarkmodeusingCH from './Compopents/CustomHooks/DarkmodeusingCH';
import TodolistUseReducer from './Compopents/useReducer/TodolistUseReducer';
import UseStopWatch from './Compopents/CustomHooks/UseStopWatch';
import { useState } from 'react';

function App() 
{

  let [toggle,setToggle]=useState(false)
  let chageToggle=()=>
  {
    setToggle(!toggle)
  } 
  
 
 return(
  <div>

    <h1>1. Employee</h1>
    <DisplayEmp/>
    <hr></hr>

    <h1>2. Readmore Readless</h1>
    <FaqMain/>
    <hr></hr>

    <h1>3. Accordian</h1>
    <TextAsgnmntMain/>
    <hr></hr>

    <h1>4. Fakestore API</h1>
    <FakestoreAssgn/>
    <hr></hr>

    <h1>5. Movies API</h1>
    <MoviesAssgn/>
    <hr></hr>

    <h1>6. Form One (Displaying single user)</h1>
    <Form1Assgn/>
    <hr></hr>

    <h1>7. Form Two (Displaying multiple users)</h1>
    <Form2Assgn/>
    <hr></hr>

    <h1>8. Form Three (Displaying user on search == NithyaShree mam)</h1>
    <Form3Assgn/>
    <hr></hr>

    <h1>9. Custom Form Validation</h1>
    <CustomFormValidation/>
    <hr></hr>

    <h1>10. React-hook-from Form Validation</h1>
    <ReactHookFormValidation/>
    <hr></hr>

    <h1>12. Custom Hooks</h1>

    <h2>1. Slider Custom hook</h2>
    <SliderUsingCustomHook/>

    <h2>2. Hide Show Custom hook</h2>
    <HideShowUsingCustomHook/>

    <h2>3. Login Form</h2>
    <UsingCustomFormHook/>

    <h2>4. Dark Mode</h2>
    <DarkmodeusingCH/>

    <h2>5. StopWatch</h2>
    <div style={{border:"2px solid black",backgroundColor:"purple",height:"80px",width:"100px",marginLeft:"400px"}}> {toggle && <UseStopWatch/>}</div>
    <button style={{marginLeft:"425px",width:"50px",height:"30px",marginTop:"4px"}} onClick={chageToggle}>{toggle?"Stop":"Start"}</button>


    <h1>13. Slider </h1>
    <SliderImages/>
    <hr></hr>

    <h1>14. Automatic Slider </h1>
    <AutomaticSlider/>
    <hr></hr>

    <h1>15. Todo list with pop up message</h1>
    <TodoApp/>
    <hr></hr>

    <h1>16. Displaying product image and details by clicking on small image</h1>
    <BrowserRouter>
    <NavigationBar navNames={{key1:"Main",key2:"Login",key3:"Products",key4:"FAQ",key5:"About"}} 
          navPaths={{url1:"/",url2:"/login",url3:"/products",url4:"/faq",url5:"/about"}}
          navStyles={routerStyles.appnav} anchorStyles={routerStyles.appanchor}/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/products' element={<ProductsPage/>}>
          <Route path='mobiles' element={<Mobiles/>} />
          <Route path='earphones' element={<Earphones/>} />
          <Route path='cameras' element={<Cameras/>} />
          <Route path='laptops' element={<Laptops/>} />
          <Route path='telivisions' element={<Telivisions/>} />
          <Route path='watches' element={<Watches/>} />
        </Route>
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/faq' element={<FaqPage/>} />
      </Routes>
    </BrowserRouter>

    <h1>17. Todo list with use Reducer</h1>
    <TodolistUseReducer/>
    <hr></hr>

    





    </div>
    
 )



  

    // !Router
    
   
    
  // ! How Rendering and re-rendering works
  // console.log("App Rendered");
  // useEffect(()=>
  // {
  //   console.log("App useEffect");
  // })
  // {console.log("App JSX")}
  // <Parent/>

  // <StateWithArray/>
  // <Faqmain/>
  // <TodoApp/>

  // ! useEffect mounting and unmounting the component
  // let [toggle,setToggle]=useState(true)
  // let chageToggle=()=>
  // {
  //   setToggle(!toggle)
  // } 
  // {toggle && <UseEffectHook/>}
  // <button onClick={chageToggle}>{toggle?"Remove":"Add"}</button>

  // <ApiErrorLoaderUseReducer/>
  // <ApiGitHubUsers4/>
  // <Form1Assgn/>
  // <MoviesAssgn/>
  // <FakestoreAssgn/>
  // <ApiGitHubUsers3/>
  // <ApiGitHubUsers2/>
  // <ApiGitHubUsers/>
  // <FormData3/>
  // <FormData2/>
  // FormData
  // <TodoApp/>
  // <Faqmain/>
  // <StateWithArray/>
  // <TextAsgnmntMain/>
//   <SingleStudent/>
  // <HideAndShow2/>
  // <HideAndShow/>
  // <Counter/>
   // <EventHandling3/>
  // <EventHandling2/>
  // EventHandling
  // <ConditionalRendering3/>
  // <ConditionalRendering2/>
  // <ConditionalRendering/>
  // <Parent></Parent> 
  // <SetStateIsAsynchronous2></SetStateIsAsynchronous2>
//  <SetStateIsAsynchronous></SetStateIsAsynchronous>
  // <StateWithObjects/>
  // <StateWithObjects2></StateWithObjects2>
  // <Student/>


    // <div>
    // <h1>Hello Banglore</h1>
    // <Student />
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

}

export default App;
