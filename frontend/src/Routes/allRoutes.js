import React from "react";
/** Add Route Component */
//Home Section
const Layout2 =  React.lazy(() => import("../pages/Home/Layout2/Layout2"));
//Company Section
const AboutUs =  React.lazy(() => import("../pages/Company/AboutUs/AboutUs"));
const Services =  React.lazy(() => import("../pages/Company/Services/Services"));
const Team =  React.lazy(() => import("../pages/Company/Team/Team"));
const Pricing =  React.lazy(() => import("../pages/Company/Pricing/Pricing"));
const PrivacyAndPolicy =  React.lazy(() => import("../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy"));
const Faqs =  React.lazy(() => import("../pages/Company/Faqs/Faqs"));

//Jobs Section
const JobList2 =  React.lazy(() => import("../pages/Jobs/JobList2/JobList2"));
const JobDetails =  React.lazy(() => import("../pages/Jobs/JobDetails/JobDetails"));
const JobsCategories =  React.lazy(() => import("../pages/Jobs/JobsCategories/JobsCategories"));

//Candidate and Company Section
const CandidateGrid =  React.lazy(() => import("../pages/CandidateAndCompany/CandidateGrid/CandidateGrid"));
const CandidateDetails =  React.lazy(() => import("../pages/CandidateAndCompany/CandidateDetails/CandidateDetails"));
const CompanyList =  React.lazy(() => import("../pages/CandidateAndCompany/CompanyList/CompanyList"));
const CompanyDetails =  React.lazy(() => import("../pages/CandidateAndCompany/CompanyDetails/CompanyDetails"));

//Blog Section
const BlogGrid =  React.lazy(() => import("../pages/Blog/BlogGrid/BlogGrid"));
const BlogDetails =  React.lazy(() => import("../pages/Blog/BlogDetails/BlogDetails"));
const BlogAuther =  React.lazy(() => import("../pages/Blog/BlogAuther/BlogAuther"));

//const Contacts 
const Contact =  React.lazy(() => import("../pages/Contact/Contact"));

//const AuthPages
const SignIn =  React.lazy(() => import("../pages/ExtraPages/SignIn"));
const SignUp =  React.lazy(() => import("../pages/ExtraPages/SignUp"));
const SignOut =  React.lazy(() => import("../pages/ExtraPages/SignOut"));
const ResetPassword =  React.lazy(() => import("../pages/ExtraPages/ResetPassword"));
const ComingSoon =  React.lazy(() => import('../pages/ExtraPages/ComingSoon'));
const Error404 =  React.lazy(() => import("../pages/ExtraPages/Error404"));
const Components =  React.lazy(() => import("../pages/ExtraPages/Components/Components"));

//profile section(User Profile)
const BookMarkJobPost =  React.lazy(() => import("../pages/Profile/BookMarkJobPost/BookMarkJobPost"));
const ManageJobs =  React.lazy(() => import("../pages/Profile/ManageJobs/ManageJobs"));
const BookMarkJobs =  React.lazy(() => import("../pages/Profile/BookMarkJobs/BookMarkJobs"));
const MyProfile =  React.lazy(() => import("../pages/Profile/MyProfile/MyProfile"));


const userRoutes = [

  //profile Section(User Profile)
  { path: "/bookmarkjobpost", component: BookMarkJobPost },
  { path: "/myprofile", component: MyProfile   },
  { path: "/bookmarkjobs", component: BookMarkJobs },
  { path: "/managejobs", component: ManageJobs },

  //Components Section(Extra Pages)
  { path: "/components", component: Components },

  // Blog Section
  { path : "/blogauther", component: BlogAuther },
  { path : "/blogdetails", component: BlogDetails },
  { path : "/bloggrid", component: BlogGrid },

  //Companies Section
  { path : "/companydetails", component: CompanyDetails },
  { path : "/companylist", component: CompanyList },
  // Candidates Section
  { path : "/candidatedetails", component: CandidateDetails },
  { path : "/candidategrid", component: CandidateGrid },

  //Jobs Section
  { path : "/jobscategories", component: JobsCategories },
  { path : "/jobdetails", component: JobDetails },
  { path : "/joblist", component: JobList2 },

  //Others Section  
  { path : "/faqs", component: Faqs },
  { path : "/privacyandpolicy", component: PrivacyAndPolicy },
  { path : "/pricing", component: Pricing },
  { path : "/team", component: Team },
  { path : "/services", component: Services },
  { path : "/aboutus", component: AboutUs },
  { path : "/contact", component: Contact },

  //Home Section
  { path : "/", component: Layout2 },
  { path: "/comingsoon", component: ComingSoon },
  { path: "*", component: Error404 },
];

const authRoutes = [
  { path: "/resetpassword", component: ResetPassword }, 
  { path: "/signout", component: SignOut }, 
  { path: "/signup", component: SignUp },  
  { path: "/signin", component: SignIn },  
];


export { userRoutes, authRoutes };
