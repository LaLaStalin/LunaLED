import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";

const CardSlider = () => {
  return (
    <Paper className="h-[216px] rounded-[8px] ">
      <div className="flex flex-col justify-between items-start pt-[52px] pb-[28px] pl-[40px] h-full">
        <h1 className="uppercase font-bold w-[172px] text-[30px] leading-[35.01px] tracking-[-1.5px]">
          spotlight COB King
        </h1>
        <Button variant="outlined" size="medium">
          SHOP NOW
        </Button>
      </div>
    </Paper>
  );
};

export default CardSlider;
