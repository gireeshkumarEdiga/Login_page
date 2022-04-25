import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Form  } from "../db.json";

export const Signin = () => {
    const [matter, setMatter] = useState([]);
    const [data, setData] = useState({
        email:"",
        password:"",
    });

    useEffect(() => {
        getData();
    },[]);


    const {email, password} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(result.length>0){
            window.location.href="./home";
        }else{
            alert("wrong creadintials");
        }
    }

    const getData = () => {
        fetch("http://localhost:3001/details")
        .then((res) => res.json())
        .then((res) => {
            setMatter(res);
            //console.log(res);
            //console.log(matter);
        })
    }

    // axios.get("http://localhost:3001/details")
    // .then((res) => setMatter(res));


    let result = matter.filter((user) => user.email===email && password==user.password );
    console.log(result.length);


    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <h2>Signin</h2>
                <br />
                <br />
                <input type="email" placeholder="enter your email" name="email" value={email} onChange={handleChange} />
                <br />
                <br />
                <input type="password" placeholder="enter your password" name="password" value={password} onChange={handleChange} />
                <br />
                <br />
                <button type="submit" >SUBMIT</button>
            </form>
            {/* {result.length>0 ? <button><Link to="/home">Goto Homepage</Link></button> : ""}; */}
        </div>
    )
}