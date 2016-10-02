"use strict";
var router_1 = require('@angular/router');
var summary_component_1 = require('./summary.component');
var skills_component_1 = require('./skills.component');
var experience_component_1 = require('./experience.component');
var education_component_1 = require('./education.component');
var appRoutes = [
    {
        path: 'summary',
        component: summary_component_1.SummaryComponent
    },
    {
        path: 'skills',
        component: skills_component_1.SkillsComponent
    },
    {
        path: 'experience',
        component: experience_component_1.ExperienceComponent
    },
    {
        path: 'education',
        component: education_component_1.EducationComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map