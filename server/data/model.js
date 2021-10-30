const pkg = require('../../package.json');

module.exports = {
  appVersion: pkg.version,
  assetPath: '/public',
  pageTitle: 'PxlPro Jobs',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Find a job',
      href: '/search',
    },
    {
      label: 'Careers advice',
      href: '#careers',
    },
    {
      label: 'Job alerts',
      href: '#job-alerts',
    },
    {
      label: 'Your jobs',
      href: '#your-jobs',
    },
  ],

  heroMessage: 'Search 1,570 jobs.',
  heroSubMessage: 'Hundreds of new career opportunities each day. Find you perfect job.',

  searchRadiusOptions: [
    { text: 'Within 10 miles', value: 10 },
    { text: 'Within 20 miles', value: 20 },
    { text: 'Within 30 miles', value: 30 },
  ],

  ctas: [
    {
      icon: 'job-alerts',
      title: 'Get instant job alerts',
      subtitle: 'Personalised job recommendations sent straight to your email.',
    },
    {
      icon: 'create-account',
      title: 'Create an account for free',
      subtitle: 'Shortlist jobs, manage your job alerts and receive special offers.',
    },
    {
      icon: 'upload-resume',
      title: 'Upload your resume',
      subtitle: 'Upload your resume so our employers can match your details to the best jobs.',
    },
  ],
};
