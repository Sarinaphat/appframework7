import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import findmin from './components/pages/findmin';
import CaseImplementCreateForm from './components/pages/CaseImplementCreateForm';
import AppointmentForm from './components/pages/AppointmentForm';
import CaseStatusButton from './components/pages/CaseStatusButton';
import Profile from './components/pages/Profile';
import Worklog from './components/pages/Worklog';
import Approve from './components/pages/Approve';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/findmin/',
    component: findmin
}, {
    path: '/caseimplementcreateform/',
    component: CaseImplementCreateForm
}, {
    path: '/appointmentform/',
    component: AppointmentForm
}, {
  path: '/casestatusbutton/',
  component: CaseStatusButton
}, {
  path: '/profile/',
  component: Profile
}, {
  path: '/worklog/',
  component: Worklog
}, {
  path: '/approve/',
  component: Approve
}];
