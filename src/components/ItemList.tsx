import React, { memo } from "react";
import { Box } from "@mui/system";
import { APP_CSS } from "../constants/constants";
import { Item } from "../type/type";

const ItemList: React.FunctionComponent<Item> = ({ id, isDone, beginAt, text }) => {
  return (
    <Box
      sx={{
        transition: APP_CSS.TRANSITION_TIME
      }}
    >
      <div>{id}</div>
      <div>{isDone}</div>
      <div>{beginAt}</div>
      <div>{text}</div>
    </Box>
  )
};

export default memo(ItemList);