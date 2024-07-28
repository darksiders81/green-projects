import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BtnJoin from '../../Component/BtnJoin/BtnJoin'
import './LoginPage.css'
export default function LoginPage() {
    return (
        <div className='bg-color mt-5 pt-5'>
            <Container className='mt-5 pt-5'>
                <Row className='align-items-center gap-5'>
                    <Col lg={6}>
                        <img className='img-fluid w-100' src="https://erramix-themes.com/techidaa/images/auth/login.svg" alt="" />
                    </Col>
                    <Col lg={5} className='ms-5'>
                        <h1 className='titleClass'>
                            Login
                        </h1>
                        <p className='textBody'>
                            You Dont Have An Account ?
                            <Link className='greenTitle ms-4'>
                                Register Now
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
                                    <Form autoComplete='false' className='formInput'>
                                        <Field type="email" name="email" placeholder="email......" value={values.email} />
                                        <Field type="password" name="password" placeholder="password....." value={values.password} />
                                        <button className='btn-join' onClick={onSubmit}>Login</button>
                                    </Form>
                                )
                            }

                        </Formik>
                        <p className='text-center mt-3'>
                            Forgot Password ?
                            <Link className='greenTitle ms-4'>
                                Reset Password
                            </Link>



                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
