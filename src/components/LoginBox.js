import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import "./LoginBox.css";
import { auto } from 'async';
import { borderRadius } from '@material-ui/system';

function Copyright() {
    return (
        <Typography variant="body2" color="black" align="center">
            {/* {'Copyright © '} */}
            {'유명인, 밴드, 비즈니스를 위한 '}
            <Link style={{ color: "black", fontWeight: "bolder" }} href="https://www.facebook.com/pages/create/?ref_type=registration_form">
                페이지 만들기
            </Link>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'none 1px lightgray',
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "10px 10px 10px px lightgray",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
        height: "50px",
        backgroundColor: "#0179F6",
        color: "white",
        fontSize: "20px"
    },
    pwd: {
        textAlign: "center",
    }
}));

export default function LoginBox() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        // margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="이메일 또는 전화번호"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        로그인
                    </Button>
                    <Grid
                        container
                        className={classes.pwd}
                    >
                        <Grid item xs>
                            <Link
                                href="#"
                                variant="body2"
                                style={{ color: "#156FE4", fontWeight: "600" }}
                            >
                                비밀번호를 잊으셨나요?
                            </Link>
                            <hr style={{ margin: "20px 0px", border: "solid 1px lightgray" }} />
                            {/* 새 계정 만들기_진우님 버튼 넣기 */}
                            <div style={{ margin: "25px 0px" }}>
                                <button style={{ height: "40px" }}>새 계정 만들기</button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={4}>
                <Copyright />
            </Box>
        </Container >
    );
}