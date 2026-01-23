"use client";
import React from "react";

interface ChronicleButtonProps {
  text: string;
  outlined?: boolean;
  width?: string;
  onClick: () => void;
  borderRadius?: string;
  hoverColor?: string;
  customBackground?: string;
  customForeground?: string;
  hoverForeground?: string;
}

export const ChronicleButton: React.FC<ChronicleButtonProps> = ({
  text,
  outlined = false,
  width = "124px",
  onClick,
  borderRadius = "2em",
  hoverColor = "#156ef6",
  customBackground,
  customForeground,
  hoverForeground,
}) => {
  const baseStyles: React.CSSProperties = {
    width,
    height: "2.5rem",
    borderRadius,
    border: outlined ? `1px solid ${hoverColor}` : "none",
    backgroundColor: outlined ? "transparent" : (customBackground || hoverColor),
    color: customForeground || (outlined ? hoverColor : "#fff"),
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
    fontFamily: "inherit",
  };

  return (
    <button
      onClick={onClick}
      style={baseStyles}
      onMouseEnter={(e) => {
        if (outlined) {
          e.currentTarget.style.backgroundColor = hoverColor;
          e.currentTarget.style.color = hoverForeground || "#fff";
        } else {
          e.currentTarget.style.backgroundColor = hoverColor;
          e.currentTarget.style.opacity = "0.9";
        }
      }}
      onMouseLeave={(e) => {
        if (outlined) {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = hoverColor;
        } else {
          e.currentTarget.style.backgroundColor = customBackground || hoverColor;
          e.currentTarget.style.opacity = "1";
        }
      }}
    >
      {text}
    </button>
  );
};
