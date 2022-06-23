import {useRef,useState,useEffect,useContext} from 'react';
import AuthContext from './context/AuthProvider';

import axios from 'axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [pwd,setPwd] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const [success,setsuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])
    useEffect(() => {
        setErrMsg('');
    },[user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({user, pwd}),
                {
                    hearders:{'Content-Type':'application/json'},
                }
                );
                console.log(JSON.stringify(response?.data));

                const accessToken = response?.data?.accesToken;
                const roles = response?.data?.roles;
                setAuth({user,pwd,roles,accessToken})
                setUser('');
                setPwd('');
                setsuccess(true);
        } catch (err) {
            if(!err?.response){
                setErrMsg('No server Response');
            } else if (err.response?.status === 400){
                setErrMsg('missing user ou passwor')
            }else if (err.response?.status === 401){
                setErrMsg('pas acces');
            }else {
                setErrMsg('login Failed');
            }
            errRef.current.focus();
            
        }

        console.log(user,pwd);
        
    }


    return (

        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    si vous n'avez pas vos acces vous n'avez rien a faire ici<br />
                    
                </p>
            </section>
        )}
    </>
    )
}
export default Login