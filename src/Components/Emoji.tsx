import bullEye from "../assets/bullseye.svg";
import thumb from "../assets/thumbs-up.svg";
import muh from "../assets/neutral-face.svg"
import { ImageProps, Img } from "@chakra-ui/react";

interface props {
    rating:number
}

function Emoji({rating}:props) {

    const emojiMap:{[key:number] : ImageProps} = {
        3:{src:muh, alt:"muh", boxSize:"25px"},
        4:{src:thumb, alt:"recommended", boxSize:"25px"},
        5:{src:bullEye, alt:"exceptional", boxSize:"35px"}
    }
    if (rating <3) return null;
  return (
    <Img {...emojiMap[rating] } marginTop={1}/>
  )
}

export default Emoji