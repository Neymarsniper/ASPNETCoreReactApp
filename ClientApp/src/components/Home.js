//import React, { Component } from 'react';

//export class Home extends Component {
//  static displayName = Home.name;

//  render() {
//    return (
//      <div>
//        <h1>Hello, world!</h1>
//        <p>Welcome to your new single-page application, built with:</p>
//        <ul>
//          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
//          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
//          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
//        </ul>
//        <p>To help you get started, we have also set up:</p>
//        <ul>
//          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
//          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
//          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
//        </ul>
//        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
//      </div>
//    );
//  }
//}


//Class Based Component Code
import React, { Component } from 'react';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            myStyle: {
                color: 'black',
                backgroundColor: 'white'
            },
            btntext: 'Enable Dark Mode'
        };
    }

    handleUpClick = () => {
        console.log("UpperCase was clicked");
        let newText = this.state.text.toUpperCase();
        this.setState({
            text: newText
        });
        this.props.showAlert("Converted to UpperCase!!", "success");
    }

    handleLowClick = () => {
        console.log("LowerCase was clicked");
        let newText = this.state.text.toLowerCase();
        this.setState({
            text: newText
        });
        this.props.showAlert("Converted to LowerCase!!", "success");
    }

    handleOnChange = (event) => {
        console.log("On Change");
        this.setState({
            text: event.target.value
        });
    }

    handleClear = () => {
        this.setState({
            text: ''
        });
        this.props.showAlert("All text has been Removed!!", "success");
    }

    toggleStyle = () => {
        if (this.state.myStyle.color === 'white') {
            this.setState({
                myStyle: {
                    color: 'black',
                    backgroundColor: 'white'
                },
                btntext: 'Enable Dark Mode'
            });
        } else {
            this.setState({
                myStyle: {
                    color: 'white',
                    backgroundColor: 'black'
                },
                btntext: 'Enable Light Mode'
            });
        }
    }

    render() {
        return (
            <>
                <div style={this.state.myStyle}>
                    <h1>"Enter the text to analyze"</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" value={this.state.text} onChange={this.handleOnChange} rows="8" style={{ backgroundColor: this.props.mode === 'dark' ? 'grey' : '#e2e7eb', color: this.props.mode === 'dark' ? 'white' : 'black' }} />
                    </div>
                    <li style={{ listStyle: 'none' }}>
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">What to do?</a>
                        <ul className="dropdown-menu">
                            <li><button type="button" onClick={this.handleUpClick} className="dropdown-item" style={this.state.myStyle}>toUpperCase</button></li>
                            <li><button type="button" onClick={this.handleLowClick} className="dropdown-item" style={this.state.myStyle}>toLowerCase</button></li>
                            <li><button type="button" onClick={this.handleClear} className="dropdown-item" style={this.state.myStyle}>ClearText</button></li>
                        </ul>
                    </li>
                </div>
                <div className="container my-3" style={this.state.myStyle}>
                    <h1>Your text Summary:</h1>
                    <p>Number of words are: {this.state.text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and Number of Characters are: {this.state.text.length}.</p>
                    <h3>Your text Preview:</h3>
                    <p>{this.state.text}</p>
                    <button onClick={this.toggleStyle} type="button" className="btn btn-primary">{this.state.btntext}</button>
                </div>
            </>
        );
    }
}


//My functional Based Component Code

//import React, { useState } from 'react'

//export default function Home(props) {
//    const handleUpClick = () => {
//        console.log("UpperCase was clicked");
//        let newText = text.toUpperCase();
//        setText(newText);
//        props.showAlert("Converted to UpperCase!!", "success");
//    }
//    const handleLowClick = () => {
//        console.log("LowerCase was clicked");
//        let newText = text.toLowerCase();
//        setText(newText);
//        props.showAlert("Converted to LowerCase!!", "success");
//    }
//    const handleOnChange = (event) => {
//        console.log("On Change");
//        setText(event.target.value);
//    }
//    const handleClear = (event) => {
//        setText('');
//        props.showAlert("All text has been Removed!!", "success");
//    }
//    const [text, setText] = useState('');


//    const [myStyle, setmyStyle] = useState({
//        color: 'black',
//        backgroundColor: 'White'
//    })
//    const [btntext, setBtnText] = useState("Enable  Mode");

//    const toggleStyle = () => {
//        if (myStyle.color === 'white') {
//            setmyStyle({
//                color: 'black',
//                backgroundColor: 'white'
//            })
//            setBtnText("Enable Dark Mode");
//        }
//        else {
//            setmyStyle({
//                color: 'white',
//                backgroundColor: 'black'
//            })
//            setBtnText("Enable Light Mode");
//        }
//    }

//    return (
//        <>
//            <div style={myStyle}>
//                <h1>"Enter the text to analyze"</h1>
//                <div class="mb-3">
//                    <textarea className="form-control" id="myBox" value={text} o    nChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : '#e2e7eb', color: props.mode === 'dark' ? 'white' : 'black' }} />
//                </div>
//                <li style={{ listStyle: 'none' }}>
//                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">What to to?</a>
//                    <ul className="dropdown-menu">
//                        <li><button type="submit" onClick={handleUpClick} className="dropdown-item" style={myStyle}>toUpperCase</button></li>
//                        <li><button type="submit" onClick={handleLowClick} className="dropdown-item" style={myStyle}>toLowerCase</button></li>
//                        <li><button type="submit" onClick={handleClear} className="dropdown-item" style={myStyle} >ClearText</button></li>
//                    </ul>
//                </li>
//            </div>
//            <div className="container my-3" style={myStyle}>
//                <h1>Your text Summary:</h1>
//                <p>Number of words are: {text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and Number of Characters are: {text.length}.</p>
//                <h3>Your text Preview:</h3>
//                <p>{text}</p>

//                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
//            </div>
//        </>
//    )
//}