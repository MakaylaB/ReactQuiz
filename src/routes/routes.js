import { Route, Routes } from "react-router"
import Login from '../components/login';
import Contact from '../components/contactus';
import Profile from '../components/secure/profile';
import About from '../components/about';
import Reset from '../components/reset';
import Person from '../components/register';
import Settings from '../components/settings';
import Home from '../components/home';
import NotFound from "../components/notfound";
import RequireAuth from "../services/requireAuth";
import LoginSuccess from "../components/loginsuccessful";
import RegisterSuccess from "../components/registersuccessful";

const MyRoutes = () => {
    return (
        < Routes >
            <Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Person />}></Route>            <Route path="/reset" element={<Reset />}></Route>
                <Route path="/reset" element={<Reset />}></Route>
                <Route path="/profile" element={
                    // <RequireAuth>

                        <Profile />
                    // </RequireAuth>

                }></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/contactus" element={<Contact />}></Route>
                <Route path="*" element={<NotFound />} />
                <Route path="/registersuccessful" element={<RegisterSuccess />}></Route>
                <Route path="/loginsuccessful" element={<LoginSuccess />}></Route>

            </Route>
        </Routes >
    )

}

export default MyRoutes;