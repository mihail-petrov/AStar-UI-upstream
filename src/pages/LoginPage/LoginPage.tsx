import { Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import classes from "./login-page.module.scss";
import globalClasses from "../../shared/styles/global.module.scss";

interface LoginPageProps { }

type State = { 
    username: string,
    password: string,
    remember: boolean
}

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
    const [inputs, setInputs] = useState<State>({ username: "", password: "", remember: false});

    const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const name = event.target.name;
        const value = event.target.value;
        name === "remember" ? setInputs(values => ({ ...values, remember: !inputs.remember})) : setInputs(values => ({ ...values, [name]: value}));
    }

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // TODO
    }

    return (
        <div className={globalClasses["bg-color"]}>
            <div className={globalClasses["page-wrapper"]}>
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
                                <TextField value={inputs.username} onChange={handleInputsChange} name="username" fullWidth variant="outlined" placeholder="Username" sx={{mb: 1.2}} />
                                <TextField value={inputs.password} onChange={handleInputsChange} name="password" fullWidth variant="outlined" placeholder="Password" type="password" />
                                <div className={classes["content-form-body-checkbox"]}>
                                    <FormControlLabel control={<Checkbox name="remember" value={inputs.remember} onChange={handleInputsChange} />} label="Remember me" className={classes["content-form-body-checkbox-label"]} />
                                </div>
                                <Button type="submit" variant="contained" className={classes["content-form-body-action"]} sx={{mb: 1.5}}>Log In</Button>
                            </form>
                            <Link underline="none" color="primary.dark" fontWeight={"600"}>Forgot password?</Link>
                        </div>
                        <div className={classes["content-form-footer"]}>
                            Not a member? <Link underline="none" color="primary.dark" fontWeight={"600"}>Sign Up</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
