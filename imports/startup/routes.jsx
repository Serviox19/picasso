import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

//import App and Assets
import App from '../ui/layouts/App';


FlowRouter.route('/', {
  action() {
    mount(App);
  }
});
