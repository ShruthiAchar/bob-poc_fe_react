import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { CommonColor } from '../../../commonStyle/CommonColor';

type Props = {
  callBackFunction?: any;
  title: string;
  buttonColor: string;
  textColor?: any;
  disabled: boolean;
};

const CustomButton = ({
  callBackFunction,
  title,
  buttonColor,
  textColor,
  disabled,
}: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: buttonColor,
        width: '100%',
        height: 50,
        '&:hover': {
          backgroundColor: buttonColor,
        },
        '&:disabled': {
          backgroundColor: CommonColor.ThemeOrangeFaded,
        },
      }}
      variant="contained"
      onClick={() => callBackFunction()}
      disabled={disabled}
    >
      <Typography
        sx={{
          textTransform: 'capitalize',
          fontSize: '1vw',
          fontWeight: 'bold',
          color: textColor,
          display: 'flex',
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};
export default CustomButton;
