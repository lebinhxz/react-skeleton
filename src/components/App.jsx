import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import CoursesPage from './CoursesPage';
import CourseDetailPage from './CourseDetailPage';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route path="/courses/:id" component={CourseDetailPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
