import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Regester() {
    return (
        <>
            <div className='bg-color mt-5 pt-5'>
                <Container className='mt-5 pt-5'>
                    <Row className='align-items-center gap-5'>

                        <Col lg={5} className='me-5 mx-auto'>
                            <h1 className='titleClass'>
                                sign up
                            </h1>
                            <p className='textBody'>
                                have an account already
                                <Link className='greenTitle ms-4' to="/loginpage" style={{ textDecoration: "none" }}>
                                    Login Now
                                </Link>
                            </p>
                            <Formik
                                initialValues={{ username: '', email: '', password: '', confirmpassword: '' }}

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
                                        <Form autoComplete='false' className='formInput'>
                                            <Field type="text" name="username" placeholder="username" value={values.username} />
                                            <Field type="email" name="email" placeholder="email" value={values.email} />
                                            <Field type="password" name="password" placeholder="password" value={values.password} />
                                            <Field type="password" name="confirmpassword" placeholder="confirmPasword" value={values.confirmpassword} />
                                            <button className='btn-join' onClick={onSubmit}>Login</button>
                                        </Form>
                                    )
                                }

                            </Formik>

                        </Col>
                        <Col lg={6}>
                            <img className='img-fluid w-100 d-none d-lg-block' src="https://erramix-themes.com/techidaa/images/auth/signup.svg" alt="" />
                        </Col>
                    </Row>
                </Container>

            </div>

        </>
    )
}
