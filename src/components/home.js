import { useNavigate } from "react-router-dom";
import pic from "../static/index.jpg";
import Layout from "./layout";

function Home({ form }) {
    const navigate = useNavigate()
    const aboutHandler = () => {
        navigate("/about")
    }
    const contactHandler = () => {
        navigate("/contactus")
    }
    const loginHandler = () => {
        navigate("/login")
    }
    const registerHandler = () => {
        navigate("/register")
    }
    return (

        <Layout>
            <title>Witter | Become Enlightened.</title>

            <div className="bg-[url('./static/index.jpg')] bg-cover h-screen">

                <ul className="lg:mt-8 mt-4 ml-2 flex flex-nowrap flex-1 md:justify-end sm:justify-center  mspace-x-4">
                    <li className="mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" onClick={loginHandler}>Login</li>
                    <li className="mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={aboutHandler}>About</li>
                    <li className="mr-16 nav cursor-pointer text-md hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={contactHandler}>Contact Us</li>
                </ul>

                        
                        <h1 className="content-center one lg:mt-[200px] text-6xl lg:text-9xl text-left mt-[150px] ml-10 flex flex-initial md:text-7xl ml-16 lg:ml-32  ">Learn Courses.</h1>

                        <h3 className="font-light text-left text-3xl lg:text-6xl ml-10 md:text-4xl lg:ml-32 md: ml-16"> Become Enlightened.</h3>
                        <br />
                        <button type="button" onClick={registerHandler} className=" w-1/4 h-20 float-left lg:ml-32 text-gray-900 drop-shadow-2xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl transition ease-in-out  hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-white text-4xl px-5 py-2.5 place-content-center ml-10 mr-2  title text-2xl md:text-[30px] lg:text-[45px]">Start Learning</button>

                </div>
 
  
        </Layout>

    );
}
export default Home;