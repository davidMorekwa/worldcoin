import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-row h-[90vh] justify-center items-center">
            <div >
                  <p className="text-gray-400">NEED HELP?</p>
                  <br/>
                  <p className="text-6xl font-bold text-gray-900">How can we help?</p>
                  <br/>
                  <p className=" text-gray-400">Send us a message by clicking <a className="underline text-blue-500" href="mailto:morganbiggs9@gmail.com?subject=ASSISTANCE REQUIRED">here</a>.If the button doesn't show wait a few seeconds.</p>
            </div>
            <img className="W-[120PX]"src="./images/support.png" alt="" />
      </div>
  )
}

export default Contact