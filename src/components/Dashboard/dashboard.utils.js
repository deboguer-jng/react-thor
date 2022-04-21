import imgCard1 from "../../assets/images/cards/box-card1.png";
import imgCard2 from "../../assets/images/cards/box-card2.png";
import imgCard3 from "../../assets/images/cards/box-card3.png";
import imgCard4 from "../../assets/images/cards/box-card4.png";

export const getSelectedNode = (currentCard) => {
  switch (currentCard) {
    case 1:
      return { img: imgCard1, name: "FREYA" };
    case 2:
      return { img: imgCard2, name: "HEIMDALL" };
    case 3:
      return { img: imgCard3, name: "THOR" };
    case 4:
      return { img: imgCard4, name: "ODIN" };
    default:
      return { img: imgCard1, name: "FREYA" };
  }
};
