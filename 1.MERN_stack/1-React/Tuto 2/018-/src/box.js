import React from "react";

export default function Box(props) {
    const [on, setColor] = React.useState(props)

    console.log("line 5", on);
    return (
        <div onClick={() => {
            setColor(on => !on)
        }} style={{
            backgroundColor: on ? "blue" : "green"
        }} className="box"  ></div>
    )
}