import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Component from "../components/component";
import RectangleComponent from "../components/rectangle-component";
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
import RectangleComponent1 from "../components/rectangle-component1";
import Component4 from "../components/component4";
import Component5 from "../components/component5";
import styles from "./log-in.module.css";
const LogIn: NextPage = () => {
  return (
    <div className={styles.logIn}>
      <TextField
        className={styles.logInChild}
        sx={{ width: 475 }}
        color="primary"
        variant="outlined"
        type="email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Email"
        placeholder="メール"
        size="medium"
        margin="none"
      />
      <Component />
      <TextField
        className={styles.logInItem}
        sx={{ width: 475 }}
        color="primary"
        variant="outlined"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        placeholder="パスワード"
        size="medium"
        margin="none"
      />
      <RectangleComponent />
      <Component1 />
      <Component2 />
      <Component3 />
      <RectangleComponent1 />
      <Component4 />
      <Component5 />
    </div>
  );
};

export default LogIn;
