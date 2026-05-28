const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "aarav@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 3,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Login Page",
        "taskDescription": "Design and develop the login page UI.",
        "taskDate": "2026-05-27",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve responsive navbar issue.",
        "taskDate": "2026-05-28",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Dashboard",
        "taskDescription": "Add charts to dashboard section.",
        "taskDate": "2026-05-20",
        "category": "Dashboard"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "priya@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 4,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate payment gateway API.",
        "taskDate": "2026-05-27",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Improve database query performance.",
        "taskDate": "2026-05-22",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Migration",
        "taskDescription": "Move server to new hosting provider.",
        "taskDate": "2026-05-18",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "rahul@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Build Admin Panel",
        "taskDescription": "Create admin dashboard components.",
        "taskDate": "2026-05-27",
        "category": "Admin"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Add Authentication",
        "taskDescription": "Implement JWT authentication.",
        "taskDate": "2026-05-29",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Landing Page Design",
        "taskDescription": "Design responsive landing page.",
        "taskDate": "2026-05-15",
        "category": "UI/UX"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "sneha@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 5,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Prepare project documentation.",
        "taskDate": "2026-05-26",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Testing Module",
        "taskDescription": "Perform unit testing on modules.",
        "taskDate": "2026-05-28",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix CSS Issues",
        "taskDescription": "Resolve UI alignment problems.",
        "taskDate": "2026-05-21",
        "category": "Frontend"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "vikram@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 3,
      "completed": 2,
      "failed": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Deploy Application",
        "taskDescription": "Deploy app on production server.",
        "taskDate": "2026-05-30",
        "category": "Deployment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Payment Error",
        "taskDescription": "Resolve transaction failure bug.",
        "taskDate": "2026-05-24",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Reports",
        "taskDescription": "Generate monthly analytics reports.",
        "taskDate": "2026-05-19",
        "category": "Analytics"
      }
    ]
  }
] ;

const admin = [{
    "id":1 ,
    "email": "admin@example.com",
    "password":123
}] ;

export const setLocalStorage = ()=>{
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employee,admin);
    
    // return {employee,admin}

}