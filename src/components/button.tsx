import React from "react";

type Color = "black" | "white";

type ButtonProps = {
        backgroundColor: string;
        textColor: Color;
    fontSize: number;
    pillShape?: boolean;
    padding: [number, number, number, number];
}

export default function Button({
    backgroundColor,
    textColor,
    fontSize,
    pillShape,
    padding
} : ButtonProps) {
    return (
        <button className="bg-blue-500 "></button>
    )
}