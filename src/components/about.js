import {useNavigate} from "react-router-dom";
import Layout from "./layout";
import about from "../static/about.jpg"
import about2 from "../static/about2.jpg"
import about3 from "../static/about3.jpg"

function About({}) {
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
        <ul className="lg:mt-8 mt-4 ml-2 flex flex-nowrap flex-1 md:justify-end sm:justify-center  mspace-x-4">
                    <li className="mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" onClick={loginHandler}>Login</li>
                    <li className="mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={aboutHandler}>About</li>
                    <li className="mr-16 nav cursor-pointer text-md hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={contactHandler}>Contact Us</li>
                </ul>
                {/* <h1 className="row-span-full text-[100px] one text-right ">Maximizing</h1> */}

        <div className="grid grid-cols-3 col-span-3 gap-6">

            <div className="mb-[500px]"><img className="" src={about}/></div>
            <div className="mt-40 "><img className="" src={about2}/></div>
            <div className="mt-[300px]">

                <img className="shadow-md" src={about3}/></div>
        </div>

        </Layout>

// <p>This is JHB Baltimore, where we maximize potentials [insert more later]</p> */}

);
}
    export default About;