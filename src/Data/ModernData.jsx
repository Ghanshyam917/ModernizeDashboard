import { HiMiniArrowUpLeft } from "react-icons/hi2";
import { HiMiniArrowDownRight } from "react-icons/hi2";

const card = [
    {
        image:"https://modernize-react.adminmart.com/assets/icon-user-male-ff0c3edd.svg",
        name:"Employees",
        count:"96",
        color:"rgb(93, 135, 255)",
        bgClr:"rgb(236, 242, 255)"
    },
    {
        image:"https://modernize-react.adminmart.com/assets/icon-briefcase-5ac68925.svg",
        name:"Clients",
        count:"3,650",
        color:"rgb(255, 174, 31)",
        bgClr:"rgb(254, 245, 229)"
    },
    {
        image:"https://modernize-react.adminmart.com/assets/icon-mailbox-58a01fce.svg",
        name:"Projects",
        count:"356",
        color:"rgb(73, 190, 255)",
        bgClr:"rgb(232, 247, 255)"
    },
    {
        image:"https://modernize-react.adminmart.com/assets/icon-favorites-c75eec14.svg",
        name:"Events",
        count:"696",
        color:"rgb(250, 137, 107)",
        bgClr:"rgb(253, 237, 232)"
    },
    {
        image:"https://modernize-react.adminmart.com/assets/icon-speech-bubble-4432cbf3.svg",
        name:"Payroll",
        count:"$96k",
        color:"rgb(19, 222, 185)",
        bgClr:"rgb(230, 255, 250)"
    },
    {
        image:"https://modernize-react.adminmart.com/assets/icon-connect-93bb1783.svg",
        name:"Reports",
        count:"59",
        color:"rgb(83, 155, 255)",
        bgClr:"rgb(235, 243, 254)"
    },
]

const YearlyData = [
    {
      formate:"Yearly",
      heading: "Yearly Breakup",
      price: "$36,358",
      percentage: "+9%",
      icon: <HiMiniArrowUpLeft />,
      color: "rgb(57 182 154)",
      backClr: "rgb(230 255 250)",
    },
    {
      formate:"Monthly",
      heading: "Monthly Earnings",
      price: "$6,820",
      percentage: "+9%",
      icon: <HiMiniArrowDownRight />,
      iconformate:"downright",
      color: "rgb(250 137 107)",
      backClr: "rgb(253 237 232)",
    },
  ];

export default card
export {YearlyData}