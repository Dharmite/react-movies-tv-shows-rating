import { Box, Typography, TypographyProps } from "@mui/material";

export const AssetDetailsTypography = ({ title, value, valueProps }: { title: string, value: string, valueProps?: TypographyProps }) => (
    <Box>
      <Typography variant="body1" {...valueProps}>
        <Typography component={'span'} variant="h6"><strong>{title}: </strong></Typography>{value}
      </Typography>
    </Box>
  );