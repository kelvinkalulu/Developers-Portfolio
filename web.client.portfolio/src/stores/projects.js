import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    FeaturedProjects: [
      {
        title: 'Hatujambo Enterprise Payroll Management System',
        description:
          'A comprehensive payroll platform supporting tax calculations, statutory deductions, payroll processing, payslip generation, and compliance reporting for large organizations.',
        technologies: ['Vue 3', '.NET', 'EF Core', 'SQL Server', 'Tailwind'],
        link: 'https://demo.hatujambo.com/authentication/signin',
        featured: true,
      },
      {
        title: 'Human Resource Management System',
        description:
          'An HR solution covering employee records, leave management, recruitment workflows, performance tracking, and role-based access control.',
        technologies: ['Vue 3', 'ASP.NET Core', 'SQL Server'],
        link: '#',
        featured: true,
      },
      {
        title: 'Dynamic Authorization Framework',
        description:
          'A flexible RBAC system allowing administrators to create custom roles, permissions, modules, and access policies without code changes.',
        technologies: ['Vue 3', 'ASP.NET Core', 'JWT', 'EF Core'],
        link: '#',
        featured: true,
      },
      {
        title: 'Payroll Analytics Dashboard',
        description:
          'Interactive payroll analytics featuring salary trends, tax summaries, compliance indicators, and workforce insights with real-time visualizations.',
        technologies: ['Vue 3', 'Chart.js', 'ASP.NET Core API'],
        link: '#',
        featured: false,
      },
      {
        title: 'Employee Self-Service Portal',
        description:
          'A secure employee portal enabling access to payslips, leave requests, profile management, and company announcements.',
        technologies: ['Vue 3', 'Tailwind', 'ASP.NET Core'],
        link: '#',
        featured: false,
      },
      {
        title: 'Hatujambo Business WebSite',
        description:
          'The official website for Hatujambo Enterprise, showcasing our services, solutions, and company information to potential clients and partners.',
        technologies: ['Vue 3', 'Pinia', 'Tailwind'],
        link: 'https://hatujambo.com/',
        featured: false,
      },
      // {
      //   title: 'API Gateway & Integration Platform',
      //   description:
      //     'A centralized API gateway handling authentication, rate limiting, service routing, monitoring, and integration with third-party systems.',
      //   technologies: ['.NET', 'Docker', 'Azure'],
      //   link: '#',
      //   featured: false,
      // },
    ],
  }),
})
