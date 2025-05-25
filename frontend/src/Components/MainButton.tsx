import React from 'react'

const MainButton = ({ text }: { text: string }) => {
    return (
        <>
                <button className="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        {text}
                </button>
        </>
    )
}

export default MainButton