import React, { useState } from 'react'
function Login() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [agreeTerms,setAgreeTerms]=useState(false);

  function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else if(!agreeTerms)
        {
            alert("Please agree to the terms and conditions")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div>
            <h1>Login</h1>
           <form onSubmit={loginHandle}>
           <input type="text" placeholder="Enter User Id" onChange={userHandler} value={user} />{userErr?<span style={{color: 'red'}}>User Not Valid</span>:""}
            <br /> <br />
            <input type="password" placeholder="Enter User Password" onChange={passwordHandler} value={password}/>{passErr?<span style={{color: 'red'}}>Password Not Valid</span>:""}

            <br /> <br />
            {!userErr && !passErr && user.length >= 3 && password.length >= 3 ? (
                <div>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={agreeTerms}
                            onChange={(e)=>setAgreeTerms(e.target.checked)}
                        />
                        I agree 
                    </label>
                    <br /> <br />
                    <button type="submit" disabled={!agreeTerms}>Login</button>
                </div>
            ) : (
                <button type="submit" disabled>Login</button>
            )}
           </form>
        </div>
    )
}

export default Login
