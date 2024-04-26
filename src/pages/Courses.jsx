import React from 'react';
import userStore from "../utils/courseStore"; 

const CourseList = () => {
  const { courses, addCourse, removeCourse, toggleCourseStatus } = userStore(); 

  const handleAddCourse = () => {
    const newCourse = {
      id: Math.random().toString(36).substr(2, 9), 
      name: `Course ${courses.length + 1}`,
      completed: false,
    };
    addCourse(newCourse);
  };

  const handleRemoveCourse = courseId => {
    removeCourse(courseId);
  };

  const handleToggleCourseStatus = courseId => {
    toggleCourseStatus(courseId);
  };

  return (
    <div>
      <h2>Course List</h2>
      <button onClick={handleAddCourse}>Add Course</button>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <input
              type="checkbox"
              checked={course.completed}
              onChange={() => handleToggleCourseStatus(course.id)}
            />
            <span style={{ textDecoration: course.completed ? 'line-through' : 'none' }}>
              {course.name}
            </span>
            <button onClick={() => handleRemoveCourse(course.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
