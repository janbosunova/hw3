import { useState } from "react";
const Form=()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nameChangeHandler = (event)=>{
        setName(event.target.value)

    }
    const emailChangeHandler = (event)=>{
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value)
    }
    const SubmitHandler = (event)=>{
        event.preventDefault()
         console.log(name);
         console.log(email);
         console.log(password);

    }
    return(
        <form onSubmit={SubmitHandler}>
            <div>
                <label>Name</label>
                <input type="text" onChange={nameChangeHandler} />
            </div>
            <div>
            <label>Email</label>
                <input type="text" onChange={emailChangeHandler}/>
            </div>
            <div>
            <label>Password</label>
                <input type="text" onChange={passwordChangeHandler}/>
            </div>
            <div>
                <button type="submit" >Add</button>
            </div>
        </form>
    )
}
export default Form;