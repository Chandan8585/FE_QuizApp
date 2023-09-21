import axios from 'axios'
// import { useAuth } from '../context/authContext';


export const LoginHandler = async (email, password) => {
    // const {authDispatch } = useAuth();
    console.log(email, password);
    try { 

        const response = await axios.post("https://wicked-plum-sea-urchin.cyclic.cloud/auth/login", {
            email: email,
            password: password 
        });
        // console.log("response", response.data.accessToken);
        const token = response.data.accessToken;  
        const userName = response.data.userName;
        // console.log("token",token)      ;
        if(response.status === 200){
            // console.log(token)
            localStorage.setItem("token", token);
            localStorage.setItem("userName", userName);
            return token;  
        }
    } catch (error) {
        console.log(error);
    }

};



