import React, {useEffect, useState} from 'react';

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
                color = "bg-red-500";
                break;
            case "Region":
                color = "bg-yellow-500";
                break;
            case "Description":
                color = "bg-green-500";
                break;    
        }
       setColorin(color);
    }
    
  const isVisible = percentage >= threshold;

  return (
    <div
      className={`hint-box py-2 px-10 flex flex-col items-center ${colorin} ${isVisible ? 'visible' : 'hidden'}`}
    >
      <p className="hint-title hint-small">{title}:</p>
      <p className="hint-content flex flex-col ">{content}</p>
    </div>
  );
};

export default HintDisplay;
