import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}


//import React, { Component } from 'react';
//import { BrowserRouter, Route, Routes } from "react-router-dom";
//import NavMenu from './components/NavMenu';
//import Alert from './components/Alert';
//import About from './components/About';

//export default class App extends Component {
//    constructor(props) {
//        super(props);

//        this.state = {
//            mode: 'light',
//            alert: null
//        };
//    }

//    toggleMode = () => {
//        if (this.state.mode === 'light') {
//            this.setState({
//                mode: 'dark'
//            });
//            document.body.style.backgroundColor = 'black';
//            this.showAlert("Dark Mode has been enabled", "success");
//            document.title = 'React App : Dark Mode';
//        } else {
//            this.setState({
//                mode: 'light'
//            });
//            document.body.style.backgroundColor = 'white';
//            this.showAlert("Light Mode has been enabled", "success");
//            document.title = 'React App : Light Mode';
//        }
//    }

//    showAlert = (msg, type) => {
//        this.setState({
//            alert: {
//                msg: msg,
//                type: type
//            }
//        });

//        setTimeout(() => {
//            this.setState({
//                alert: null
//            });
//        }, 1000);
//    }

//    render() {
//        const { mode, alert } = this.state;

//        return (
//            <>
//                <BrowserRouter>
//                    <NavMenu mode={mode} toggleMode={this.toggleMode} />
//                    <Alert alert={alert} />
//                    <div className="container my-5">
//                        <Routes>
//                            <Route exact path="/about" element={<About mode={mode} />} />
//                        </Routes>
//                    </div>
//                </BrowserRouter>
//            </>
//        );
//    }
//}




//import React, { useState } from 'react';
///*import './custom.css';*/
//import NavMenu from './components/NavMenu';
///*import Textform from './Textform';*/
//import Alert from './components/Alert';
//import About from './components/About';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

//function App() {
//    // let myStyle= {
//    //   color: 'white',
//    //   backgroundColor:'black'
//    // }
//    const [mode, setMode] = useState('light');
//    const toggleMode = () => {
//        if (mode === 'light') {
//            setMode('dark');
//            document.body.style.backgroundColor = 'black';
//            showAlert("Dark Mode has been enabled", "success");
//            document.title = 'React App : Dark Mode';
//        }
//        else {
//            setMode('light');
//            document.body.style.backgroundColor = 'White';
//            showAlert("Light Mode has been enabled", "success");
//            document.title = 'React App : Light Mode';
//        }
//    }
//    const [alert, setAlert] = useState(null);
//    const showAlert = (msg, type) => {
//        setAlert({
//            msg: msg,
//            type: type
//        })
//        setTimeout(() => {
//            setAlert(null);
//        }, 1000);
//    }

//    return (
//        <>
//            <BrowserRouter>
//                <NavMenu titletext="Practice_App" abouttext="Blogs" hometext="Home" mode={mode} toggleMode={toggleMode} />
//                <Alert alert={alert} />
//                <div className="container my-5" mode={mode} toggleMode={toggleMode}>
//                    <Routes>
//                        <Route exact path="/about" element={<About mode={mode} />} />
//                        {/*Since "exact" is used with "path" to exactly used complete matching concept...*/}
//                    </Routes>
//                    {/*<Routes>*/}
//                    {/*    <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} />} />*/}
//                    {/*</Routes>*/}
//                </div>
//            </BrowserRouter>
//        </>
//    );
//}

//export default App;
