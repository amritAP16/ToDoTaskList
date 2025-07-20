const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Build login page",
        description: "Create responsive login UI with Tailwind CSS",
        date: "2025-07-15",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high"
      },
      {
        title: "Fix navbar issue",
        description: "Fix mobile view of navbar",
        date: "2025-07-12",
        category: "development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium"
      },
      {
        title: "Write unit tests",
        description: "Add Jest tests for auth module",
        date: "2025-07-10",
        category: "testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design homepage layout",
        description: "Sketch out a clean homepage layout",
        date: "2025-07-14",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high"
      },
      {
        title: "Update branding",
        description: "Apply new brand colors and fonts",
        date: "2025-07-13",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium"
      },
      {
        title: "Design error page",
        description: "Create a friendly 404 page",
        date: "2025-07-11",
        category: "design",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low"
      },
      {
        title: "Review UX feedback",
        description: "Analyze user feedback from last release",
        date: "2025-07-16",
        category: "design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        priority: "medium"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate third-party API for payment",
        date: "2025-07-14",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high"
      },
      {
        title: "Bug Fixing",
        description: "Fix known bugs in task module",
        date: "2025-07-12",
        category: "development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium"
      },
      {
        title: "Database Cleanup",
        description: "Remove unused tables and indexes",
        date: "2025-07-11",
        category: "maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low"
      },
      {
        title: "Refactor routes",
        description: "Simplify and organize Express routes",
        date: "2025-07-17",
        category: "development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        priority: "high"
      },
      {
        title: "Performance audit",
        description: "Run Lighthouse tests and optimize",
        date: "2025-07-09",
        category: "testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Client meeting",
        description: "Discuss project scope with client",
        date: "2025-07-13",
        category: "communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high"
      },
      {
        title: "Prepare presentation",
        description: "Slides for project proposal",
        date: "2025-07-12",
        category: "planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium"
      },
      {
        title: "Follow up email",
        description: "Send updates to stakeholders",
        date: "2025-07-10",
        category: "communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Set up CI/CD",
        description: "Implement GitHub Actions",
        date: "2025-07-11",
        category: "devops",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high"
      },
      {
        title: "Dockerize app",
        description: "Create Dockerfile and docker-compose setup",
        date: "2025-07-09",
        category: "devops",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium"
      },
      {
        title: "Server health check",
        description: "Monitor server usage and logs",
        date: "2025-07-10",
        category: "maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low"
      },
      {
        title: "Log rotation",
        description: "Configure log rotation for Node app",
        date: "2025-07-17",
        category: "maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        priority: "high"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Rohit",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return { employees, admin }
}

