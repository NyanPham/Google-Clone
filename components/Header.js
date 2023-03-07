import React from "react"
import User from "./User"

export default function Header() {
    return (
        <header className="flex flex-row p-5 justify-between items-center">
            <div className="flex space-x-4 items-center">
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                <User />
            </div>
        </header>
    )
}
