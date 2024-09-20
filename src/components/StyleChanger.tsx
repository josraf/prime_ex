import React from "react";

interface StyleChangerProps {
  style: string;
  onStyleChange: (newStyle: string) => void;
}

const StyleSwitcher: React.FC<StyleChangerProps> = ({
  style,
  onStyleChange,
}) => {
  return (
    <div className="style-switcher">
      <button
        onClick={() => onStyleChange("zebra")}
        className={style === "zebra" ? "active" : ""}
      >
        Zebra Style
      </button>
      <button
        onClick={() => onStyleChange("normal")}
        className={style === "normal" ? "active" : ""}
      >
        Normal Style
      </button>
    </div>
  );
};

export default StyleSwitcher;
