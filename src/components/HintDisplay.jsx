import React, { useEffect, useState } from 'react';
import '../CSS/hints.css';

import BugImage from '../imgs/bug.png';
import DarkImage from '../imgs/dark.png';
import DragonImage from '../imgs/dragon.png';
import ElectricImage from '../imgs/electric.png';
import FairyImage from '../imgs/fairy.png';
import FightingImage from '../imgs/fighting.png';
import FireImage from '../imgs/fire.png';
import FlyingImage from '../imgs/flying.png';
import GhostImage from '../imgs/ghost.png';
import GrassImage from '../imgs/grass.png';
import GroundImage from '../imgs/ground.png';
import IceImage from '../imgs/ice.png';
import NormalImage from '../imgs/normal.png';
import PoisonImage from '../imgs/poison.png';
import PsychicImage from '../imgs/psychic.png';
import RockImage from '../imgs/rock.png';
import SteelImage from '../imgs/steel.png';
import WaterImage from '../imgs/water.png';

const imageMap = {
  bug: BugImage,
  dark: DarkImage,
  dragon: DragonImage,
  electric: ElectricImage,
  fairy: FairyImage,
  fighting: FightingImage,
  fire: FireImage,
  flying: FlyingImage,
  ghost: GhostImage,
  grass: GrassImage,
  ground: GroundImage,
  ice: IceImage,
  normal: NormalImage,
  poison: PoisonImage,
  psychic: PsychicImage,
  rock: RockImage,
  steel: SteelImage,
  water: WaterImage,
};

const HintDisplay = ({ title, content, threshold, percentage }) => {
  const [colorin, setColorin] = useState("");
  const [imagesToShow, setImagesToShow] = useState([]);

  useEffect(() => {
    qColorSuprimo();
  }, []);

  const qColorSuprimo = () => {
    let color = "";

    switch (title) {
      case "Type":
        color = "type-hint";
        const types = content.split(',').map(type => type.trim());
        const validImages = types.filter(type => imageMap[type]);
        setImagesToShow(validImages.map(type => imageMap[type]));
        break;
      case "Region":
        color = "region-hint";
        break;
      case "Description":
        color = "description-hint";
        break;
      default:
        break;
    }

    setColorin(color);
  };

  let isVisible = percentage >= threshold;
  if (threshold === 1) {
    isVisible = true;
  }

  return (
    <div className={`hint-box ${colorin} ${isVisible ? 'visible' : 'hidden'}`}>
      <p className="hint-title hint-small">{title}:</p>
      {title === 'Type' && imagesToShow.length > 0 && (
        <div className="type-images-container">
          {imagesToShow.map((image, index) => (
            <img key={index} src={image} alt={`${title} Image`} className="type-image" />
          ))}
        </div>
      )}
      {title !== 'Type' && (
        <p className="hint-content flex flex-col">{content}</p>
      )}
    </div>
  );
};

export default HintDisplay;