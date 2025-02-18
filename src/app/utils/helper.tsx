import { Ai, BotIcon, Menu, Tools } from "./icons";
import chatBox from "../../../public/assets/imges/webp/chatbox.webp";
import code from "../../../public/assets/imges/webp/code.webp";
import tools from "../../../public/assets/imges/webp/tools.webp";
import laptop from "../../../public/assets/imges/webp/laptop.webp";
import one from "../../../public/assets/imges/png/one.png"
import two from "../../../public/assets/imges/png/two.png"
import three from "../../../public/assets/imges/png/three.png"
import four from "../../../public/assets/imges/png/four.png"

export const SLIDER_ICONS_LIST = [<BotIcon />, <Menu />, <Tools />, <Ai />];

export const SLIDER_LIST = [
  {
    numberImage: one,
    numberImageAlt: "one",
    title: "AI Chatbots don’t create enterprse-grade",
    gradientText: "apps",
    description:
      "Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
    image: chatBox,
    imageAlt: "chat-box",
  },
  {
    numberImage: two,
    numberImageAlt: "two",
    title: "Modernization Doesn’t Have to Mean Failure",
    description:
      "Traditional app modernization often falls short because teams are forced to navigate poorly documented legacy code — an outdated maze that slows progress and drives up costs. It’s time to change the narrative.",
    secondDescription:
      "The execution can neither compromise on business and technical requirements nor lose sight of modern architecture and security.",
    image: code,
    imageAlt: "code",
  },
  {
    numberImage: three,
    numberImageAlt: "three",
    title: "Protected from Legal Risks and IP liability ",
    description:
      "AdaptsAI ensures IP protection by generating custom, original code with no direct replication of copyrighted material. Our LLM engine delivers unique, optimized solutions while maintaining high quality. Users can trust their codebases are free from IP risks, enabling secure, responsible AI innovation.",
    image: tools,
    imageAlt: "tools",
  },
  {
    numberImage: four,
    numberImageAlt: "four",
    title: "AI generated apps need maintenance too!",
    description:
      "Business applications demand ongoing maintenance to address new vulnerabilities, ensure reliability, and deliver updates or bug fixes.",
    secondDescription:
      "With AdaptsAI's advanced context awareness, maintenance becomes effortless—minimizing code ramp-up time, streamlining troubleshooting, and simplifying enhancements for maximum efficiency.",
    image: laptop,
    imageAlt: "laptop",
  },
];

export const TABLE_HEADING_LIST = [
  "First Name",
  "Email",
  "Phone",
    "Password",
  "Remove"
];
