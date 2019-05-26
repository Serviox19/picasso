import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

//import App and Assets
import HomeLayout from '../ui/layouts/HomeLayout';
import ResumeLayout from '../ui/layouts/ResumeLayout';


FlowRouter.route('/', {
  action() {
    mount(HomeLayout)
  }
});

FlowRouter.route('/resume', {
  action() {
    mount(ResumeLayout)
  }
});
