import { useState } from 'react'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponent from './components/HeaderComponent'
import Login from "./components/Login";
import MovieList from './components/MovieList';
import AnimalList from './components/AnimalList';

function App() {

  // let number= 0;
  const [number, setNumber]= useState(0);
  const [myValue, setMyValue]= useState("");
  let myPlaceholder = "Escribe Aqui";

  const [greetings, setGreetings]= useState("Bienvenidos a mi Web");
  const links={
    home: "home",
    blog: "blog",
    news: "news",
    contact: "Contact us"
  }

  const condition=true;


  const [user,setUser]= useState({});

  const login = (userInfo) => {
    console.log("userInfo: ",userInfo);
    setUser(userInfo);
  }

  const addOne = () => {
   setNumber(number +1);
    console.log(number)
  }

  const sayHello = () => {

    console.log("Hello!")
  }

  const handleChange = (e) => {
    console.log("el objeto:",e.target.value)
  }


  return (
    <>
      <HeaderComponent greetings={greetings}  links={links}></HeaderComponent>

      <main className='main-content'>
       { user.username && <h2 onClick={sayHello}>Hola {user.username}</h2>}

       <Login handleLogin={login}/>


       {condition && <h2>La condicion se cumple</h2>}
       {!condition && <h2>La condicion no se cumple</h2>}

       {condition ? (
        <h2>La condicion se cumple</h2>
       ) : (
        <h2>La condicion no se cumple</h2>
       )}

       <h2 onClick={addOne}>Number: {number}</h2>

       <input value={myValue} placeholder={myPlaceholder} type="text" onChange={handleChange}/>
       <br /><br />
      <ButtonComponent></ButtonComponent>


      <MovieList></MovieList>
      <AnimalList></AnimalList>
      </main>
     
    </>
  )
}

export default App
