import {useNavigate} from "react-router-dom";
import Layout from "./layout";

function NotFound({ form }) {
    const navigate = useNavigate()
    const homeHandler = () => {
        navigate("/")
    }
    return (
        <Layout>
            <h1 className="four text-[300px] text-light-brown">404</h1>
            <p className="nav text-7xl  text-light-brown ">Hmm...We can't seem to find that page! </p>
            <p className="mt-2 nice underline text-light-brown hover:text-darker-brown cursor-pointer" onClick={homeHandler}>Go Back Home</p>
        </Layout>

    );
}

export default NotFound;