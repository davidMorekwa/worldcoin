import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Index = ({personalInfo, setPersonalInfo, navigate}) => {
    let p = personalInfo
    function handleAmountInput(e){
        e.preventDefault()
        p.amount = e.target.value
    }
    function handleEmailInput(e){
        e.preventDefault()
        p.email = e.target.value
    }
    function handlePhoneNumberInput(e){
        e.preventDefault()
        p.phone_number = e.target.value
    }
    function handlePaymentMethodInput(e){
        e.preventDefault()
        console.log(e)
        p.payment_method = e.target.value
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(p)
        setPersonalInfo(p)
    }
    return (
        <form
            className="flex flex-col justify-center items-center pt-[1px] h-[100vh] w-full "
        >
            <h1 className="w-[450px] text-6xl text-center">
                Effortlessly sell Your worldcoins
            </h1>
            <br />
            <div className="w-[26%] p-2">
                <p className="w-full text-center text-[12px] text-gray-400 font-light">
                    Turn your Worldcoins into cash effortlessly! Sell your
                    crypto with easee and get paid via Mpesa or Payal for a
                    seamless and convenient transaction experience. Start
                    maximising the value of your Worldcoins today.
                </p>
                <br />
                <div>
                    <label
                        className="block text-[12px] text-gray-400 mb-3"
                        htmlFor="payment_method"
                    >
                        PREFFERED PAYMENT METHOD
                    </label>
                    <select
                        required
                        onChange={handlePaymentMethodInput}
                        name="payment_method"
                        id="payment_method"
                        className="border-solid border-2 w-full h-12 rounded-lg pl-3 hover:cursor-pointer font-light text-gray-900 text-[14px]"
                    >
                        <option value="PayPal">PayPal</option>
                        <option value="Mpesa">Mpesa</option>
                    </select>
                </div>
                <br />
                <div>
                    <label
                        className="block text-[12px] text-gray-400 mb-3"
                        htmlFor="amount"
                    >
                        AMOUNT
                    </label>
                    <input
                        required
                        onChange={handleAmountInput}
                        className="border-solid border-2 w-full h-12 rounded-lg pl-3 hover:cursor-pointer placeholder:text-[12px]"
                        type="number"
                        name="amount"
                        min="3"
                        placeholder="Amount in USD"
                    />
                </div>
                <br />
                <div>
                    <label
                        className="block text-[12px] text-gray-400 mb-3"
                        htmlFor="email_address"
                    >
                        EMAIL ADDRESS
                    </label>
                    <input
                        required
                        className="border-solid border-2 w-full h-12 rounded-lg pl-3 hover:cursor-pointer placeholder:text-[12px]"
                        placeholder="e.g. myname@gmail.com"
                        type="email"
                        name="email_address"
                        onChange={handleEmailInput}
                    />
                </div>
                <br />
                <div>
                    <label
                        className="block text-[12px] text-gray-400 mb-3"
                        htmlFor="phone_number"
                    >
                        PHONE NUMBER
                    </label>
                    <input
                        required
                        prefix="+254"
                        className="border-solid border-2 w-full h-12 rounded-lg pl-3 hover:cursor-pointer placeholder:text-[12px]"
                        placeholder="+254 7xxxxxxxx"
                        type="number"
                        name="phone_number"
                        onChange={handlePhoneNumberInput}
                    />
                </div>
                <br />
                <a href="/overview">
                    <button
                        id="btn_proceed"
                        className="w-full border-solid border-2 h-10 rounded-3xl bg-blue-500 text-white"
                        onClick={(event)=>{
                            handleSubmit(event)
                            navigate('/overview')
                        }}
                    >
                        proceed
                    </button>
                </a>
            </div>
        </form>
    );
};
