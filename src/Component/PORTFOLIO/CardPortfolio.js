              <Container fluid>
                        <div className="cardfooter">
                            <h3 className='cardtitle'>{props.title}</h3>
                            <p className='cardsubject'>{props.desc}</p>
                            <p className='cardhash'> {props.hasht.map(hash => (
                                <span>{hash}</span>
                            ))}
                            </p>
                            <button className='w-100 cardBtn'><FaEye /> View Project</button>
                        </div>
                    </Container>
                </div>
            </Col>
        </>
    )
}
