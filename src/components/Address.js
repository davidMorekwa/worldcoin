import React from "react";

const Address = () => {
    function copyToClipboard() {
        document
            .getElementById("copyButton")
            .addEventListener("click", function () {
                const textToCopy = "0x773ef13b4fac30c2b09e0e07a33e67d53ef20fc1"; // Change this to the text you want to copy
                // Use the Clipboard API to copy text to clipboard
                navigator.clipboard
                    .writeText(textToCopy)
                    .then(() => {
                        console.log(
                            "Text copied to clipboard successfully: " +
                                textToCopy
                        );
                        alert("Text copied to clipboard successfully!");
                    })
                    .catch((err) => {
                        console.error(
                            "Unable to copy text to clipboard: ",
                            err
                        );
                        alert(
                            "Unable to copy text to clipboard. Please try again."
                        );
                    });
            });
    }
    return (
        <div className="w-full h-[100vh] bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white w-1/4 p-4 rounded-2xl flex flex-col justify-around items-center h-2/3">
                <p className="text-center w-[85%] font-light">
                    Send worldcoin tokens to the addess below
                </p>
                <div className="border p-3 rounded-xl w-full">
                    <span className="block text-gray-500 text-sm font-light">
                        Address
                    </span>
                    <br />
                    <input
                        disabled
                        name="walletId"
                        id="walletId"
                        value="0x773ef13b4fac30c2b09e0e07a33e67d53ef20fc1"
                        className="text-green-500 font-light text-sm w-full"
                    />
                </div>
                <div className="flex flex-row justify-evenly items-center w-full">
                    <script></script>
                    <button
                    onClick={copyToClipboard}
                        className="bg-blue-500 hover:bg-blue-700 w-[45%] text-white p-3 rounded-full"
                        id="copyButton"
                    >
                        Copy to clipboard
                    </button>
                    <a className="w-[30%]" href="/success">
                        <button className="border p-3 rounded-full w-full hover:bg-gray-900 hover:text-white">
                            proceed
                        </button>
                    </a>
                </div>
                <img src="./images/steps.png" alt="" />
            </div>
        </div>
    );
};

export default Address;
