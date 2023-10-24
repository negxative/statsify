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