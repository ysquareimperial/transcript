import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Table } from 'reactstrap'
import './Transcript.css'
import logo from './images/logo.jpeg'
import { useNavigate } from 'react-router-dom'
import edit from './images/edit.png'
import print from './images/print.png'
export default function PrintTranscript() {

    const navigate = useNavigate()

    const tableData = [
        {
            admNo: 'EDU//112',
            fullName: 'Abdussalaa',
            combination: 'English English',
        },
        {
            admNo: 'EDU//113',
            fullName: 'Abdussalaa',
            combination: 'English English',
        }, {
            admNo: 'EDU//114',
            fullName: 'Abdussalaa',
            combination: 'English English',
        }, {
            admNo: 'EDU//115',
            fullName: 'Abdussalaa',
            combination: 'English English',
        },
    ]
    const [result, setResult] = useState(tableData)
    // const fetchData = () => {
    //     fetch(tableData)
    //         .then(raw => raw.json())
    //         .then(data => setResult(data.result))
    //         .catch(err => console.log(err))
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])
    const [state, setSearch] = useState({
        search: "",
    });
    const handleChanges = ({ target: { name, value } }) => {
        setSearch({ [name]: value });
    };
    let rows = [];
    result &&
        result.forEach((item, index) => {
            if (
                item.admNo.toLowerCase().indexOf(state.search.toLowerCase()) ===
                -1
            ) {
                return;
            }
            rows.push(
                <tr key={index}>
                    <th>{item.admNo}</th>
                    <td>{item.fullName}</td>
                    <td>{item.combination}</td>
                    <td style={{ cursor: 'pointer' }} onClick={() => navigate('/')}><img src={edit} alt='' style={{ width: 28, float: 'right' }} /></td>
                    <td style={{ cursor: 'pointer' }}><img src={print} alt='' style={{ width: 28, float: 'right' }} /></td>
                </tr>
            );

        });
    return (
        <div className='mt-5 mb-5'>
            <Container>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                        <div className='text-center'>
                            <p className='p-2'>Student’s Transcript</p>
                        </div>
                        <button className='print-btn mb-3' onClick={() => navigate('/')}>Go Back</button>
                        <Card className='shadow p-4  transcript-card' style={{ borderRadius: 10 }}>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <input className='search_field' name='search' onChange={handleChanges} type='search' placeholder="Enter student's admission number" style={{ backgroundImage: `url${edit}` }} />
                                </Col>
                            </Row>
                            {/* {JSON.stringify(state)} */}
                            <Table striped responsive bordered hover size="sm" className='mt-4'>
                                <thead>
                                    <tr>
                                        <th>Adm No</th>
                                        <th>Full Name</th>
                                        <th>Combination</th>
                                        <th style={{ textAlign: 'right' }}>Edit</th>
                                        <th style={{ textAlign: 'right' }}>Print</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {tableData.map((item, index) => (

                                        <tr>
                                            <td>{item.admNo}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.combination}</td>
                                            <td style={{ cursor: 'pointer' }} onClick={() => navigate('/')}><img src={edit} alt='' style={{ width: 28, float: 'right' }} /></td>
                                            <td style={{ cursor: 'pointer' }}><img src={print} alt='' style={{ width: 28, float: 'right' }} /></td>
                                        </tr>
                                    ))} */}
                                    {rows}
                                </tbody>
                            </Table>

                            <p className="text-center mt-5" style={{ color: 'red' }}> {rows.length === 0 ? <span>No student found</span> : null}</p>
                        </Card>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div >
    )
}
