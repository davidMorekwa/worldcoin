import React from "react";

const Overview = ({personalInfo}) => {
    let info = personalInfo
    console.log("Peersonal Information")
    console.log(info)
    let paymentIcon = info.payment_method == "PayPal" ? "./images/icons8-paypal-48.png" : "./images/mpesa.png"
    return (
        <>
            <h1 className="text-center text-5xl">Sell your worldcoins</h1>
            <br />
            <div className="w-full bg-gray-100 h-[80vh] flex flex-col justify-center items-center">
                <div className="bg-white lg:w-1/3 sm:w-3/3 md:w-3/3 h-[85%] rounded-3xl p-8 md:p-7">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-between items-center">
                            <a href="/">
                                <img
                                    src="./images/icons8-back-arrow-50.png"
                                    alt="Back"
                                    className="size-4 hover:cursor-pointer"
                                />
                            </a>
                            <span className="font-bold ml-1">Confirm Order</span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <span className="font-light">Selling WLD</span>
                            <img src="./images/logo.png" alt="Logo" />
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-row justify-between items-center w-full bg-gray-100 p-3 rounded-xl">
                        <div className="flex flex-row justify-between items-center">
                            <img
                                src="./images/icons8-wallet-48.png"
                                alt=""
                            />
                            <div className="ml-2">
                                <span className="font-extralight text-[12px]">
                                    Spend
                                </span>
                                <br />
                                <span>{info.amount}</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <img src={paymentIcon} alt="PayPal" className="size-9"/>
                            <div className="ml-1">
                                <span className="font-extralight text-[12px]">
                                    Method
                                </span>{" "}
                                <br />
                                <span>{info.payment_method}</span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <p className="font-light">
                        You are about to sell ${info.amount} worth of WLD
                    </p>
                    {/* TODO: Amount */}
                    <br />
                    <div className="flex flex-row justify-between items-center">
                        <span className="font-light">Amount</span>
                        <span className="font-light">WLD</span>
                    </div>
                    <br />
                    <div className="border-t border-solid p-3 md;p-2 sm:w-full md:w-full">
                        <div className="flex flex-row justify-between items-center my-3 md:w-3/3">
                            <span className="font-light text-sm text-gray-500">
                                Email Address
                            </span>
                            <span className="text-sm text-wrap md:w-3/4 sm:w-2/3">{info.email}</span>
                        </div>
                        <div className="flex flex-row justify-between items-center my-3">
                            <span className="font-light text-sm text-gray-500">
                                Phone Number
                            </span>
                            <span className="text-sm text-wrap md:w-3/4 sm:w-2/3">{info.phone_number}</span>
                        </div>
                        <div className="flex flex-row justify-between items-center my-3">
                            <span className="font-light text-sm text-gray-500">
                                Service Fee
                            </span>
                            <span>0.50 USD</span>
                        </div>
                        <div className="flex flex-row justify-between items-center my-3">
                            <span className="font-light text-sm text-gray-500">
                                You wil pay
                            </span>
                            <span>{parseFloat(info.amount) + 0.50}</span>
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-row justify-between items-center">
                        <a className="w-[30%]" href="/">
                            <button className="border-solid border-2 w-full p-2 rounded-2xl font-bold hover:bg-gray-950 hover:text-white">
                                Cancel
                            </button>
                        </a>
                        <a href="/address">
                            <button className="p-3 rounded-full bg-blue-500 hover:bg-blue-700 text-white">
                                I understand, continue
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overview;
