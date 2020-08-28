import React from 'react'

class Contact extends React.Component {
    render(){
        return(
            <form className="Contact">
                <h1>Contact</h1>
                <label for="email">Email</label>
                <input type="text" name = "email"/>
                <label for="subject">Subject</label>
                <input type= "text" name = "subject"></input>
                <label for="Message">Message</label>
                <input type="text-area" name="message"></input>
            </form>
        )
    }
} 

export default Contact