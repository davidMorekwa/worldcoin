import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Index } from "./components/Index";
import Overview from "./components/Overview";
import Address from "./components/Address";
import { Success } from "./components/Success";
import Contact from "./components/Contact";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
    const navigate = useNavigate();
    const [personalInformation, setpersonalInfo] = useState({
        email: "",
        phone_number: "",
        amount: 0,
        payment_method: "Mpesa",
    });
    // useEffect(()=>{
    //   console.log(personalInformation)
    // }, [personalInformation])
    const genRand = (len) => {
        return Math.random()
            .toString(36)
            .substring(2, len + 2);
    };
    const transactionId = genRand(20);
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Index
                            setPersonalInfo={setpersonalInfo}
                            personalInfo={personalInformation}
                            navigate={navigate}
                        />
                    }
                />
                <Route
                    path="/overview"
                    element={<Overview personalInfo={personalInformation} />}
                />
                <Route path="/address" element={<Address />} />
                <Route
                    path="/success"
                    element={<Success personalInfo={personalInformation} transactionId={transactionId}/>}
                />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
