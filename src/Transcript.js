import React, { useState } from 'react'
import { Card, Col, Container, Row, Table } from 'reactstrap'
import './Transcript.css'
export default function Transcript() {
    let form =
    {
        student_name: '',
        admission_number: '',
        combination: '',
        semester: '',
        marks: '',
        points: '',
        grade: ''

    }



    const [transcriptForm, setTranscriptForm] = useState(form)
    const handleChange = ({ target: { name, value } }) => {
        setTranscriptForm((prev) => ({ ...prev, [name]: value }))
    }
    const submit = () => {
        console.log(transcriptForm)
    }
    const tableData = [
        {
            code: 'EDU 11',
            title: 'History of Education in Nigeria',
            marks: <input className='table_input' type='text' name='marks' value={transcriptForm.marks} onChange={handleChange} />,
            points: <input className='table_input' type='text' name='points' value={transcriptForm.points} onChange={handleChange} />,
            grade: <input className='table_input' type='text' name='grade' value={transcriptForm.grade} onChange={handleChange} />,
        },
    ]
    return (
        <div className='mt-5 mb-5'>
            <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <div className='text-center'>
                            <h3 className='h-1'>UNITY COLLEGE OF EDUCATION KANO STATE</h3>
                            <p className='p-1'>Accredited NCE awarding College in Nigeria</p>
                            <p className='p-2'>Student’s Transcript</p>
                        </div>
                        <Card className='shadow p-4  transcript-card' style={{ borderRadius: 10 }}>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <label>
                                        Student:
                                        <input className='transcript_field' name='student_name' type='text' value={transcriptForm.student_name} onChange={handleChange} />
                                    </label>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <label>
                                        Admission Number:
                                        <input className='transcript_field' name='admission_number' type='text' value={transcriptForm.admission_number} onChange={handleChange} />
                                    </label>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <label style={{ display: 'inline' }}>
                                        Combination:
                                        <input className='transcript_field' name='combination' type='text' value={transcriptForm.combination} onChange={handleChange} />
                                    </label>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <label>
                                        Semester:
                                        <select className='transcript_field' name='semester' value={transcriptForm.semester} onChange={handleChange}>
                                            <option>Select Semester</option>
                                            <option>1st Semester</option>
                                            <option>2nd Semester</option>
                                            <option>3rd Semester</option>
                                        </select>
                                    </label>
                                </Col>
                            </Row>

                            <Table striped responsive bordered hover size="sm" className='mt-4'>



                                <thead>
                                    <tr>
                                        <th>CODE</th>
                                        <th>TITLE</th>
                                        <th>MARKS</th>
                                        <th>POINTS</th>
                                        <th>GRADE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr>
                                            <td>{item.code}</td>
                                            <td>{item.title}</td>
                                            <td>{item.marks}</td>
                                            <td>{item.points}</td>
                                            <td>{item.grade}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                            <div className='text-center'>
                                <button className='save-btn' onClick={submit}>
                                    SAVE
                                </button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div >
    )
}
