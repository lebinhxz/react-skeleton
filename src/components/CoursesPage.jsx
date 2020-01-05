import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as courseActions from '../redux/actions/courseActions';

function Courses({ courses, loadCourses }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses();
    }
  }, [courses, loadCourses]);

  return (
    <div>
      <h1>Courses Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr>
              <td>{ course.id }</td>
              <td>{ course.name }</td>
              <td>{ course.author }</td>
              <td>{ course.releaseDate }</td>
              <td>
                <button className="btn btn-danger" type="button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  loadCourses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
