import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './Pages/Home/Home/Home.component';
import { AboutCollegeComponent } from './Pages/About-College/about-college.component';
import { NewsComponent } from './Pages/News/news.component';
import { NewsDetailComponent } from './Pages/News/news-detail/news-detail.component';
import { StaffMembersComponent } from './Pages/StaffMembers/staff-members.component';
import { ServicesComponent } from './Pages/Services/services.component';
import { SectorPageComponent } from './Pages/sectors/Sector-Page/Sector-Page.component';
import { ParentAboutSectorComponent } from './Pages/sectors/SharedComponents/parent-about-sector/parent-about-sector.component';
import { SectorDepartmentsComponent } from './Pages/sectors/SharedComponents/sector-departments/sector-departments.component';
import { SectorNewsComponent } from './Pages/sectors/SharedComponents/News/news.component';
import { SectorNewsDetailComponent } from './Pages/sectors/SharedComponents/News/news-detail/news-detail.component';
import { SectorServicesComponent } from './Pages/sectors/SharedComponents/sector-services/sector-services.component';
import { MedicalDeanSpeechComponent } from './Pages/Home/dean-speech/dean-speech.component';
import { VisionMissionComponent } from './Pages/About-College/vision-mission.component';
import { HistoryComponent } from './Pages/About-College/overview/history.component';
import { GoalsComponent } from './Pages/goals/goals.component';
import { OrganizationalStructureComponent } from './Pages/About-College/management/OrganizationalStructure/OrganizationalStructure.component';
import { UnitsCentersComponent } from './Pages/Units-Centers/units-centers.component';
import { CourseDescriptionsComponent } from './Pages/Units-Centers/course-descriptions/course-descriptions.component';
import { JobDescriptionGuideComponent } from './Pages/Units-Centers/job-description-guide/job-description-guide.component';
import { AcademicStandardsComponent } from './Pages/Units-Centers/academic-standards/academic-standards.component';
import { ParentAboutSectorComponent as UnitsParentAboutComponent } from './Pages/Units-Centers/parent-about-sector/parent-about-sector.component';
import { conferenceComponent } from './Pages/Conferences/conference.component';
import { ConferenceDetailComponent } from './Pages/Conferences/conference-detail/conference-detail.component';
import { DepartmentsComponent } from './Pages/Departments/departments.component';
import { ScientificDepartmentsComponent } from './Pages/Scientific-Departments/scientific-departments.component';
import { ParentAboutSectorComponent as DepartmentAboutComponent } from './Pages/Scientific-Departments/parent-about-sector/parent-about-sector.component';
import { EventsDetailComponent } from './Pages/Conferences/events-details/events-details.component';
import { MagazinePageComponent } from './Pages/magazine-page/magazine-page.component';
import { ProtocolsComponent } from './Pages/protocols/protocols.component';

export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: HomeComponent },
        {path:'dean-word', component:MedicalDeanSpeechComponent},
        {path:'vision-mission', component:VisionMissionComponent},
        {path:'history', component:HistoryComponent},
        {path:'objectives', component:GoalsComponent},
        {path:'structure', component:OrganizationalStructureComponent},
        {path:'protocols', component:ProtocolsComponent},




        {
          path: 'about-college',
          component: AboutCollegeComponent,
          children: [
            // { path: 'overview', component: OverviewComponent },
            // { path: 'management', component: ManagementComponent },
            // Add other child routes here for objectives, structure, vision-mission, etc.
          ]
        },
        {
           path: 'sector/:id',
      component: SectorPageComponent, // صفحة القطاع الرئيسية
      children: [
         { path: 'about-sector', component: ParentAboutSectorComponent },
         { path: 'sector-departments', component: SectorDepartmentsComponent },
         { path: 'sector-news', component: SectorNewsComponent },
         { path: 'sector-news/:id', component: SectorNewsDetailComponent },
         { path: 'sector-services', component: SectorServicesComponent },
         { path: '', redirectTo: 'about-sector', pathMatch: 'full' },
      ]
        },
        {path:'departments', component:DepartmentsComponent},

        {
          path: 'scientific-departments/:id',
          component: ScientificDepartmentsComponent,
          children: [
            { path: 'about-department', component: DepartmentAboutComponent },
            { path: 'department-news', component: SectorNewsComponent }, // reuse for now
            { path: 'department-services', component: SectorServicesComponent }, // reuse for now
            { path: '', redirectTo: 'about-department', pathMatch: 'full' },
          ]
        },

        {
          path: 'units-centers/:id',
          component: UnitsCentersComponent,
          children: [
            {
              path: '',
              component: UnitsParentAboutComponent,
              children: [
                { path: 'about', redirectTo: '', pathMatch: 'full' },
                { path: 'vision', redirectTo: '', pathMatch: 'full' },
                { path: 'mission', redirectTo: '', pathMatch: 'full' },
                { path: 'goals', redirectTo: '', pathMatch: 'full' },
                { path: 'organizational-structure', component: OrganizationalStructureComponent },
                { path: 'course-descriptions', component: CourseDescriptionsComponent },
                { path: 'job-description-guide', component: JobDescriptionGuideComponent },
                { path: 'academic-standards', component: AcademicStandardsComponent },
                { path: 'current', component: UnitsParentAboutComponent },
                { path: '', redirectTo: 'current', pathMatch: 'full' }
              ]
            }
          ]
        },
        { path: 'journal', component: MagazinePageComponent },
        {path:'conferences', component:conferenceComponent},
        {path:'conference/detail/:id', component:EventsDetailComponent},

        { path: 'staff-members', component: StaffMembersComponent },
        { path: 'services', component: ServicesComponent },
        {
          path: 'news',
          children: [
            { path: '', component: NewsComponent },
            { path: 'detail/:id', component: NewsDetailComponent }
          ]
        }
        
      ]
    }
];
