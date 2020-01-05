import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCourse } from '../api/courseApi';

function CourseDetailPage({ id }) {
  const [course, setCourse] = useState({ name: '', author: 1, releaseDate: '' });

  useEffect(() => {
    getCourse(id).then((c) => {
      setCourse(c);
    });
  }, [id]);

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name" style={{ width: '100%' }}>
            Name:
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter name"
              id="name"
              value={course.name}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="author" style={{ width: '100%' }}>
            Author:
            <input
              name="author"
              type="text"
              className="form-control"
              placeholder="Select author"
              id="author"
              value={course.author}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="release-date" style={{ width: '100%' }}>
            Release Date:
            <input
              name="release-date"
              type="text"
              className="form-control"
              placeholder="Enter release date"
              id="release-date"
              value={course.releaseDate}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

CourseDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    id,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage);
