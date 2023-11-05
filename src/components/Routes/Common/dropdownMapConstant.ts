import { MenuProps } from "antd";

export const getLimitMap=(setLimit:React.Dispatch<React.SetStateAction<number>>): MenuProps["items"] =>{
   return  [
        {
          key: "1",
          label: 10,
          onClick: () => setLimit(10),
        },
        {
          key: "2",
          label: 20,
          onClick: () => setLimit(20),
        },
        {
          key: "3",
          label: 50,
          onClick: () => setLimit(1000),
        },
      ];
}


export const getChartsMap=(setLimit:React.Dispatch<React.SetStateAction<string>>): MenuProps["items"] =>{
  return  [
       {
         key: "1",
         label: "Vertical Bar Chart",
         onClick: () => setLimit("verticalBar"),
       },
       {
         key: "2",
         label: "Horizontal Bar Chart",
         onClick: () => setLimit("horizontalBar"),
       },
       {
         key: "3",
         label: "Pie Chart",
         onClick: () => setLimit("pie"),
       },
       {
        key: "4",
        label: "Radar Chart",
        onClick: () => setLimit("radar"),
      },
      {
        key: "5",
        label: "Polar Chart",
        onClick: () => setLimit("polar"),
      },
     ];
}