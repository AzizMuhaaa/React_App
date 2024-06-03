import react from 'react'
import './css/Contact.css'

export default function Contact(){
    const jobs = [
        { id: 1, title: 'Frontend Developer',  salary: 60000 },
        { id: 2, title: 'Backend Developer', salary: 70000 },
         {id:3,title:"HR manager" , salary:65000},
        { id: 4, title: 'Frontend Developer',  salary: 60000 },
        { id: 5, title: 'Backend Developer', salary: 70000 },
        {id:6,title:"HR manager" , salary:65000}
      ];
 const employees=[
    {id:1,name:"Dima",position:"DevOps",age:31,email:"qqq@email.com"},
    {id:2,name:"Ali",position:"DevSecOps",age:19,email:"qqq@email.com"},
    {id:3,name:"Kana",position:"managerr",age:20,email:"qqq@email.com"},
    {id:4,name:"Daga",position:"analytics",age:24,email:"qqq@email.com"},
    {id:5,name:"Altuha",position:"Call center operator",age:34,email:"qqq@email.com"},
    {id:6,name:"Anuar",position:"manager",age:29,email:"qqq@email.com"},

]

    return(<div className="container">
    <div className="job-list">
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li className="job-item" key={job.id}>
            <h3>{job.title}</h3>
            <p>Salary: ${job.salary}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="employee-list">
      <h2>Employees</h2>
      <ul>
        {employees.map(employee => (
          <li className="employee-item" key={employee.id}>
            <h3>{employee.name}</h3>
            <p>Position: {employee.position}</p>
            <p>Email: {employee.email}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>)




}