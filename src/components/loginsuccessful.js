import {useNavigate} from "react-router-dom";
import Layout from "./layout";

function LoginSuccess({ form }) {
    const navigate = useNavigate()
    const homeHandler = () => {
        navigate("/")
    }
    return (
        <Layout>
            <h1 className="four text-[150px] text-light-brown">Login</h1>
            <p className="nav text-7xl  text-light-brown ">Successful</p>
            <p className="mt-2 nice underline hover:text-darker-brown text-light-brown cursor-pointer" onClick={homeHandler}>Go Back Home</p>
        </Layout>

    );
}

export default LoginSuccess;