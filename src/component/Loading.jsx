import React from "react"

function Loading() {
    return(<div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full w-12 h-12 border-b-4 border-blue-500 border-solid"></div>
        <h1 className="text-3xl font-bold mt-2">Loading.....</h1>
    </div>)
}

export default Loading