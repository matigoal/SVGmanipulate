import React from 'react';
import { ReactComponent as MyBackground } from '../src/diagram.svg';
import './App.css';


function App() {
  const toto = () => {
    const testId = document.getElementById('Hellochris');
    if (testId) {
      console.log('debile react');
      testId.style.fill = 'rgba(255, 218, 23, 0.7)';

    } else {
      console.error('je suis la');
    }

    const testId2 = document.getElementById('Yopyop');
    if (testId2) {
      console.log('debile react');
      testId2.style.fill = 'rgba(255, 218, 23, 0.7)';

    } else {
      console.error('je suis la');
    }
    const testId3 = document.getElementById('Loua');
    if (testId3) {
      console.log('debile react');
      testId3.style.fill = 'rgba(23,255,39, 0.7)';

    } else {
      console.error('je suis la');
    }

    const testId4 = document.getElementById('Samsam');
    if (testId4) {
      console.log('debile react');
      testId4.style.fill = 'rgba(23,85,255, 0.7)';

    } else {
      console.error('je suis la');
    }

    const testId5 = document.getElementById('Pempem');
    if (testId5) {
      console.log('debile react');
      testId5.style.fill = 'rgba(255,70,23, 0.7)';

    } else {
      console.error('je suis la');
    }



    const testId6 = document.getElementById('Katkofil');
    if (testId6) {
      console.log('debile react');
      testId6.style.fill = 'rgba(171,23,255, 0.7)';

    } else {
      console.error('je suis la');
    }




  }


  // const  searchById = () => {
  // //   const allId = document.querySelectorAll('#')
  // //   const Id = [{MyBackground}]
  // //  const findId = Id.filter('jeSuisLa')

  // }
  return (
    <div className="App">
      <header><h1>Background SVG</h1></header>

      <body>
        <MyBackground width='500px' height='500px'></MyBackground>
        <button onClick={toto} >j'ai tord</button>
        <button className="filter">Selected_Id</button>

      </body>


      <footer><h1>On Doing</h1></footer>
    </div>
  );
}

export default App;
