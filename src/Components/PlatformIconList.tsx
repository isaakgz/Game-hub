import {
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../entites/Platform";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: PlatformIconListProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playStaion: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
