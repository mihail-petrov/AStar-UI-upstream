import { Button, Checkbox, Container, FormControlLabel, Link, TextField } from "@mui/material";
import React from "react";
import classes from "./login-page.module.scss";
import globalClasses from "../../shared/styles/global.module.scss";

interface LoginPageProps { }


export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className={globalClasses["bg-color"]}>
            <div className={classes.wrapper}>
                <section className={classes.content}>
                    <div className={classes["content-banner"]}>
                        <img src="images/login-banner.png" alt="login-banner" />
                    </div>
                    <div className={classes["content-form"]}>
                        <div className={classes["content-form-heading"]}>
                            <img src="icons/AStar.svg" alt="AStart-logo" />
                            <p className={classes["content-form-logo-text"]}>The complete insurance platform</p>
                        </div>
                        <div className={classes["content-form-body"]}>
                            <h2 className={classes["content-form-body-label"]}>Login</h2>
                            <form onSubmit={handleSubmitForm}>
                                <TextField fullWidth variant="outlined" placeholder="Username" sx={{mb: 1.2}} />
                                <TextField fullWidth variant="outlined" placeholder="Password" type="password" />
                                <div className={classes["content-form-body-checkbox"]}>
                                    <FormControlLabel control={<Checkbox />} label="Remember me" className={classes["content-form-body-checkbox-label"]} />
                                </div>
                                <Button type="submit" variant="contained" className={classes["content-form-body-action"]} sx={{mb: 1.5}}>Log In</Button>
                            </form>
                            <Link underline="none" color="primary.dark" fontWeight={"600"}>Forgot password?</Link>
                        </div>
                        <div className={classes["content-form-footer"]}>
                            Not a member? <Link underline="none" color="primary.dark" fontWeight={"600"}>Sign up</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
