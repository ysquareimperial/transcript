import React, { useCallback, useEffect, useState } from 'react'
import { Card, Col, Container, Row, Table } from 'reactstrap'
import { apiURL, _fetchApi, _postApi } from './helper/helper';
import './Transcript.css'
import logo from './images/logo.jpeg'   
import { useNavigate } from 'react-router-dom'
export default function Transcript() {

    const navigate = useNavigate()
    let form =
    {
        name: '',
        admission_no: '',
        combination: '',
        semester: '',
       courses:[]
    }
    const [results,setResults]=useState([])

    
    const [newCourse,setNewCourse]=useState([])
    const getId = () => {
       
        _fetchApi(
          `${apiURL}/api/courses/all?_query_type=select`,
          (data) => {
           
              setResults(data.results);
            //   setCrs_list(data.results);
             
          },
          (err) => console.log(err)
        );
      };
    useEffect(() => {
    //   getIds();
      getId();
    }, []);

    const [transcriptForm, setTranscriptForm] = useState(form)
    const handleReset =()=>{
        setTranscriptForm(p=>({
          ...p,
          name: '',
          admission_no: '',
          combination: '',
          semester: '',
         courses:[]
        }))
      }
    
    let [crs_list, setCrs_list] = useState([]);

    const changeSemester =  useCallback((semester)=>{
        if(semester){
            setCrs_list(results.filter(crs=>crs.semester.toLowerCase()=== semester.toLowerCase())); 
        }
    })

    const handleChange = ({ target: { name, value } }) => {
        setTranscriptForm((prev) => ({ ...prev, [name]: value }))
        if(name==='semester'){
            
            changeSemester(value)
        }
    }
    const handleNewChange = ({ target: { name, value } }) => {
        setNewCourse((prev) => ({ ...prev, [name]: value }))
       
    }
    const handleInputChange = (name, value, code) => {
        let arr = []
        crs_list.forEach(item => {
            if (item.code === code) {
                arr.push({ ...item, [name]: value })
            }
            else {
                arr.push(item)
            }
        })

        setCrs_list(arr)
    }
     
    const submit = () => {
        transcriptForm.courses = crs_list
        _postApi(
            `${apiURL}/api/student?_query_type=create`,
            transcriptForm,
            (data) => {
              if (data.success) {
                alert("sucess");
                
              }
            },
          )
          handleReset()
          setCrs_list([])
          alert("sucess")
        console.log(transcriptForm,crs_list)
    }
    const tableData = [
        {
            code: 'EDU 11',
            title: 'History of Education in Nigeria',
            marks: '',
            points: '',
            grade: '',
        },
        {
            code: 'EDU 112',
            title: 'History of Education in Nigeria',
            marks: '',
            points: '',
            grade: '',
        },
    ]
    return (
        <div className='mb-5' style={{marginTop:'100px'}}>
            <Container>
             {/* {JSON.stringify(crs_list)} */}
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                        <div className=''>
                            <p className='p-2'>Student’s Transcript</p>
                        </div>
                        {/* <button className='print-btn mb-3' onClick={() => navigate('/print-transcript')}>Print/Edit Transcript</button> */}
                        <Card className='shadow p-4  transcript-card' style={{ borderRadius: 10 }}>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <label>
                                        Student:
                                        <input className='transcript_field' name='name' type='text' value={transcriptForm.name} onChange={handleChange} />
                                    </label>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <label>
                                        Admission Number:
                                        <input className='transcript_field' name='admission_no' type='text' value={transcriptForm.admission_no} onChange={handleChange} />
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
                                    {crs_list.map((item, index) => (
                                        <tr>
                                            <td>{item.code}</td>
                                            <td>{item.tittle}</td>
                                            <td><input className='table_input' type='text' name='marks' value={item.marks} onChange={({ target: { value } }) => handleInputChange('marks', value, item.code)} /></td>
                                            <td><input className='table_input' type='number' name='point' value={item.point} onChange={({ target: { value } }) => handleInputChange('point', value, item.code)} /></td>
                                            <td><input className='table_input' type='text' name='grade' value={item.grade} onChange={({ target: { value } }) => handleInputChange('grade', value, item.code)} /></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                            <div className='text-center'>
                                <button className='save-btn' onClick={() => {
                                    submit()
                                    navigate('/print-transcript')
                                }}>
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
