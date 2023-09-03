import React from 'react';
import styled from 'styled-components';
import { Typography, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledFooter = styled.footer`
  padding: 16px 8px;
  margin-top: auto;
  background-color: rgba(0, 0, 0, 0.12);
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px; // Assuming default Material-UI padding
`;

const HalfWidthTypography = styled(Typography)`
  flex: 1;
  text-align: left;
`;

const HalfWidthIconButton = styled(IconButton)`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

function Down() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledFooter>
      <FlexContainer>
        <HalfWidthTypography variant="body1">
          © 2023 Five Star. All rights reserved.
        </HalfWidthTypography>
        <HalfWidthIconButton edge="end" color="inherit" onClick={handleScrollToTop}>
          <KeyboardArrowUpIcon />
        </HalfWidthIconButton>
      </FlexContainer>
    </StyledFooter>
  );
}

export default Down;
