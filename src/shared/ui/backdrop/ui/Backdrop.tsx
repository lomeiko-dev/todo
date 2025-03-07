import { Backdrop as BackDropMUI, CircularProgress } from "@mui/material";

export const Backdrop = () => {
  return (
    <BackDropMUI open={true} sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}>
      <CircularProgress color="inherit" />
    </BackDropMUI>
  );
};
