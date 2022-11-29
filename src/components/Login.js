import React, { useEffect, useRef, useState } from 'react'

export const Login = () => {
    const [email, useEmail] = useState("");
    const [password, usePassword] = useState("");
    const emailRef=useRef(null)

    useEffect(()=>{
        if (emailRef) {
            emailRef.current.focus();
        }
    },[])

    const SendForm = () => {
        useEmail("");
        usePassword("");
    }
    const ChangeEmail=(e)=>{
        useEmail(e.target.value);
    }
    const ChangePassword = (e) => {
        usePassword(e.target.value);
    }


    return (
        <>
            <form onSubmit={() => SendForm()} className="App">
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        id='email'
                        ref={emailRef}
                        value={email}
                        onChange={(e) => ChangeEmail(e)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => ChangePassword(e)}
                    />
                </div>

                <input
                    type="submit"
                    value="Enviar"
                />
            </form>


        </>
    )
}
