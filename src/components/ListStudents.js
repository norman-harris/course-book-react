import React from 'react'
import { connect } from 'react-redux'

import './ListStudents.css'

function ListStudents(props) {
  if (props.students.length === 0) {
    return <p>No students</p>
  }

  const students = props.students.map((student, i) => {
    return (
      <div
        className="group-list-item"
        key={`${student}-${i}`}
      >
        <button
          className="select-list"
          key={`${student}-${i}`}
          onClick={() => {

          }}
        >
          {student}
        </button>
        <button
        className="add-remove"
        onClick={(e) => {
          
        }}
      >&#x2b;</button>
    </div>
    )
  })

  return (
    <div className="ListStudents">
      {students}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { selectedCourse, courses } = state.courseBook
  const { students } = courses[selectedCourse]

  return {
    students
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ListStudents)