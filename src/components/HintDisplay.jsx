import React, {useEffect, useState} from 'react';
import '../CSS/hints.css';

const HintDisplay = ({ title, content, threshold, percentage }) => {

    const [colorin, setColorin] = useState("");
    useEffect(() => {
       // console.log(content);
        qColorSuprimo();
    }, []);
    
    const qColorSuprimo = () => {
        let color = "";
        switch(title)  {
            case "Type":
                color = "type-hint";
                break;
            case "Region":
                color = "region-hint";
                break;
            case "Description":
                color = "description-hint";
                break;    
        }
       setColorin(color);
    }
    
  const isVisible = percentage >= threshold;

  return (
    <div
      className={`hint-box ${colorin} ${isVisible ? 'visible' : 'hidden'}`}
    >
      <p className="hint-title hint-small">{title}:</p>
      <p className="hint-content flex flex-col ">{content}</p>
    </div>
  );
};

export default HintDisplay;
