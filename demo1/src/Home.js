import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }
    
    render() {
        return (
            <div style={{padding : 20}}>
                <h1 style={{color:"red"}}>Login</h1>
                <form action="/action_page.php">
                    Username:<br/>
                    <input onChange={(e)=>{ this.setState({username: e.target.value})}} type="text" id="username" name="username" defaultValue="" /><br />
                    Password:<br/>
                    <input onChange={(e)=>{ this.setState({password: e.target.value})}} type="text" id="password" name="password" defaultValue="" /><br /><br />
                    <span>#debug: {JSON.stringify(this.state)}</span>
                    <button onClick={()=>{alert(JSON.stringify(this.state))}}>Login</button>
                   
                </form>
            </div>
        )
    }
}
