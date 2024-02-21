import React from "react";

export const Success = ({personalInfo, transactionId}) => {
    console.log(personalInfo)
    return (
        <div className="w-full h-[90vh] bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white px-5 rounded-2xl flex flex-col justify-around items-center h-2/3">
                <div className="flex flex-row items-center justify-center w-full">
                    <h1 className="text-6xl font-bold">Yay!</h1>
                    <img src="./images/icons8-party-96.png" alt="Hurray" />
                </div>

                <p className="font-light text-gray-500 text-center w-[80%]">
                    The transaction has been successfully completed
                </p>
                <div className="flex flex-col justify-start w-full border p-3 rounded-2xl">
                    <p className="text-gray-500 font-light text-sm">Status</p>
                    <span className="text-green-500 font-light text-sm">
                        Pending
                    </span>
                    <br />
                    <span className="text-gray-500 font-light text-sm">
                        Transaction ID
                    </span>
                    <span className="font-light text-sm">{transactionId}</span>
                </div>
                <div className="flex flex-row justify-around items-center w-full">
                    <a className="w-[45%]" href="{{ route('index') }}">
                        <button className="border-solid border-2 w-full p-2 rounded-full font-bold hover:bg-gray-950 hover:text-white">
                            Trade
                        </button>
                    </a>
                    <a className="w-[45%]" href="/contact">
                        <button className="p-3 w-full rounded-full bg-blue-500 hover:bg-blue-700 text-white">
                            Support
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
