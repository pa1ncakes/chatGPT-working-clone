import React from 'react'

const ChatBody = () => {
    const aiStyle = 'bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto'
  return (
    <div className='flex flex-col gap-4'>

        {/* client message */}
        <div className='border-[#999999] break-words border-2 rounded-xl self-end px-3  py-3 max-w-[80%]'>
            <pre className='whitespaces-pre-wrap'>
                <span> Hi Chatgpt can you help me</span> 
            </pre>
        </div>

        {/* Ai response */}
        <div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3  py-3 max-w-[80%] ${aiStyle}`}>
        <span>
             Yeah sure, what do you need help with?
        </span>

        </div>
    </div>
  )
}

export default ChatBody