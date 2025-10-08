import { Box, Typography } from "@mui/material";

export default function Header({title, paragraph}){
    return (
      <Box marginBottom={3}>
        <Typography variant="h5" color="purple" fontWeight={'bold'}>
          {title}
        </Typography>
        <Typography variant="body1">{paragraph}</Typography>
      </Box>
    );
}