
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './LoginPage.css'
export default function LoginPage() {
    return (
        <div className='bg-color mt-5 pt-5'>
            <Container className='mt-5 pt-5'>
                <Row className='align-items-center gap-5'>
                    <Col lg={6}>
                        <img className='img-fluid w-100 d-none d-lg-block' src="https://erramix-themes.com/techidaa/images/auth/login.svg" alt="" />
                    </Col>
                    <Col lg={5} className='mx-auto'>
                        <h1 className='titleClass'>
                            Login
                        </h1>
                        <p className='textBody'>
                            You Dont Have An Account ?
                            <Link className='greenTitle ms-4' to="/rigester" style={{ textDecoration: "none" }}>
                                Rigester Now
                            </Link>
                        </p>
                        <Formik
                            initialValues={{ email: '', password: '' }}

                            onSubmit={(e) => {
                                let newObj = {
                                    email: e.target[0].value,
                                    password: e.target[1].value
                                }
                                console.log(newObj);
                            }}
                        >
                            {
                                ({ values, onSubmit }) => (
                                    <Form autoComplete={false} className='formInput' >
                                        <Field autoComplete="false" type="email" name="email" placeholder="email......" value={values.email} />
                                        <Field autoComplete="false" type="password" name="password" placeholder="password....." value={values.password} />
                                        <button className='btn-join' onClick={onSubmit}>Login</button>
                                    </Form>
                                )
                            }

                        </Formik>
                        <p className='text-center mt-3'>
                            Forgot Password ?
                            <Link className='greenTitle ms-4' style={{ textDecoration: "none" }}>
                                Reset Password
                            </Link>



                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
