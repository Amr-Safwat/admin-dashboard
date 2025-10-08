import { Stack } from "@mui/material";

export default function NotFound() {
  return (
    <Stack mt={30} alignItems={'center'}>
      <h1>Page Not Found (404)</h1>
      <p>This URL is Incorrect, Please try again</p>
    </Stack>
  );
}