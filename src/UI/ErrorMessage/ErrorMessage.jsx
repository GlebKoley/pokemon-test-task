import { Alert } from "@mui/material";

const ErrorMessage = ({ children }) => {
   return (
      <Alert variant="outlined" severity="error" sx={{ color: "white", fontSize: "20px" }}>
         {children}
         <br></br>
         Проверьте соединение с интернетом и обновите страницу
      </Alert>
   );
};

export { ErrorMessage };
