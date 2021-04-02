import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Recovery from '../pages/Recovery';
import Register from '../pages/Register';
import User from '../pages/User';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <>
      <Switch>
        <MyRoute exact path="/login" component={Login} isClosed={false} />
        <MyRoute exact path="/register" component={Register} isClosed={false} />
        <MyRoute exact path="/recovery" component={Recovery} isClosed={false} />
        <MyRoute exact path="/" component={User} isClosed />
        <MyRoute exact path="/users" component={User} isClosed={false} />
        <MyRoute path="*" component={Page404} />
      </Switch>
    </>
  );
}
