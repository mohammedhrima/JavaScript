import React from "react";

export default function Box(props) {
    const [on, setOn] = React.useState(props.obj.on)
    const [obj, setobj] = React.useState(props.obj)

    console.log("line 7 obj => ", props.obj, "on => ", props.on, "id is => ", props.id);

    const MyStyle = { backgroundColor: on ? "blue" : "green" }

    /*function Change() {
        setOn(On => !On);
    }*/

    return (
        <div
            style={MyStyle}
            className="box"
            onClick={() => props.func(props.id)}
        ></div>
    )
}