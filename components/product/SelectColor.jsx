"use client";
import React, { useState } from "react";

const SelectColor = ({ data, title }) => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="flex items-center gap-2 mb-4">
            <h4 className="text-primary">{title} :</h4>
            <div className="flex gap-1 items-center" >
                {data.map((color) => (
                    <div
                        key={color.id}
                        onClick={() => handleColorSelect(color)}
                        className={`${selectedColor?.id === color.id ? "border-primary" : " border-transparent"} rounded-full border-2 flex cursor-pointer items-center justify-center cust-trans`}
                    >
                        <div
                            style={{
                                backgroundColor: color.name ,
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectColor;
