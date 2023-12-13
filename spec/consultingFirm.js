function getClientsProjectsEmployeesTasksAndDeadlinesData(clientIds) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const clients = {
        '1': { name: 'Client 1', industry: 'Software' },
        '2': { name: 'Client 2', industry: 'Finance' }
        // Add more clients as needed
      };

      const projects = {
        '1': { title: 'Project 1', budget: 100000 },
        '2': { title: 'Project 2', budget: 200000 }
        // Add more projects as needed
      };

      const employees = {
        '1': { name: 'Employee 1', role: 'Developer' },
        '2': { name: 'Employee 2', role: 'Manager' }
        // Add more employees as needed
      };

      const tasks = {
        '1': { description: 'Task 1', deadline: '2024-01-01' },
        '2': { description: 'Task 2', deadline: '2024-02-01' }
        // Add more tasks as needed
      };

      const deadlines = {
        '1': { deadline: '2024-01-01', status: 'On Track' },
        '2': { deadline: '2024-02-01', status: 'Delayed' }
        // Add more deadlines as needed
      };

      const results = [];
      for (const id of clientIds) {
        if (!clients[id]) {
          reject(new Error(`Client with ID ${id} not found`));
          return;
        } else if (!projects[id]) {
          reject(new Error(`Project with ID ${id} not found`));
          return;
        } else if (!employees[id]) {
          reject(new Error(`Employee with ID ${id} not found`));
          return;
        } else if (!tasks[id]) {
          reject(new Error(`Task with ID ${id} not found`));
          return;
        } else if (!deadlines[id]) {
          reject(new Error(`Deadline with ID ${id} not found`));
          return;
        } else {
          results.push({ client: clients[id], project: projects[id], employee: employees[id], task: tasks[id], deadline: deadlines[id] });
        }
      }

      resolve(results); // No error, return results
    }, 1000); // Simulate network latency with a 1 second delay
  });
}

module.exports = getClientsProjectsEmployeesTasksAndDeadlinesData;
