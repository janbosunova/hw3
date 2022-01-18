import { useState } from "react";
const Form=()=>{
    const [userInput, setUserinput] = useState({
        name:'',
        email:'',
        password:''
    })

    const nameChangeHandler = (event)=>{
       setUserinput({
           ...userInput,
           name:event.target.value
       })

    }
    const emailChangeHandler = (event)=>{
       setUserinput({
           ...userInput,
           email:event.target.value
       })
        
    }
    const passwordChangeHandler = (event)=>{
        setUserinput({
            ...userInput,
            password:event.target.value
        })
    }
    const SubmitHandler = (event)=>{
        event.preventDefault()
       console.log(userInput);

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