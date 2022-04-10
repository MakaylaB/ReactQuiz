import { useNavigate } from "react-router-dom";

function Layout({ children }) {
    const navigate = useNavigate()
    const homeHandler = () => {
        navigate("/")
    }
    return (
    <div className="App-header text-center min-h-screen  bg-tan flex flex-col justify-center content-center w-full">
        <h1 onClick={homeHandler} className="cursor-pointer sm:mt-25 title text-7xl absolute top-0 left-0 mt-10 ml-10 md:mt-6 lg:mt-10 ">Witter</h1>
        {children}
    </div>
    )
}
export default Layout;