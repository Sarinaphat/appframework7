import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import findmin from './components/pages/findmin';
import CaseImplementCreateForm from './components/pages/CaseImplementCreateForm';

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
}];
