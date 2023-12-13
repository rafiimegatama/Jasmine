// consultingFirm.spec.js

const getClientsProjectsEmployeesTasksAndDeadlinesData = require('./consultingFirm');

describe('getClientsProjectsAndEmployeesData', function() {
    // Set the timeout interval to 10 seconds for all tests in this describe block
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    });
    
    it('fetches the correct data for multiple clients, their projects, their employees, their tasks, and their deadlines using a callback', function(done) {
        getClientsProjectsEmployeesTasksAndDeadlinesData(['1', '2'], function(error, data) {
            if (error) {
                done.fail(error);
            } else {
                expect(data).toEqual([
                    { client: { name: 'Client 1', industry: 'Software' }, project: { title: 'Project 1', budget: 100000 }, employee: { name: 'Employee 1', role: 'Developer' }, task: { description: 'Task 1', deadline: '2024-01-01' }, deadline: { deadline: '2024-01-01', status: 'On Track' } },
                    { client: { name: 'Client 2', industry: 'Finance' }, project: { title: 'Project 2', budget: 200000 }, employee: { name: 'Employee 2', role: 'Manager' }, task: { description: 'Task 2', deadline: '2024-02-01' }, deadline: { deadline: '2024-02-01', status: 'Delayed' } }
                ]);
                done();
            }
        }).catch(done.fail);
    });
    
    it('returns an error when a client ID is not found using a promise', function(done) {
        getClientsProjectsEmployeesTasksAndDeadlinesData(['3', '2']).catch(error => {
            expect(error).toBeTruthy();
            expect(error.message).toEqual('Client with ID 3 not found');
            done();
        });
    });

    it('returns an error when an employee ID is not found using a promise', function(done) {
        getClientsProjectsEmployeesTasksAndDeadlinesData(['1', '3'])
          .then(() => {
            done.fail('Promise should have been rejected');
          })
          .catch((error) => {
            expect(error.message).toEqual('Employee with ID 3 not found');
            done();
          });
      });
      
    it('fetches the correct data for multiple clients, their projects, their employees, their tasks, and their deadlines using a promise', function(done) {
        getClientsProjectsEmployeesTasksAndDeadlinesData(['1', '2']).then(data => {
            expect(data).toEqual([
                { client: { name: 'Client 1', industry: 'Software' }, project: { title: 'Project 1', budget: 100000 }, employee: { name: 'Employee 1', role: 'Developer' }, task: { description: 'Task 1', deadline: '2024-01-01' }, deadline: { deadline: '2024-01-01', status: 'On Track' } },
                { client: { name: 'Client 2', industry: 'Finance' }, project: { title: 'Project 2', budget: 200000 }, employee: { name: 'Employee 2', role: 'Manager' }, task: { description: 'Task 2', deadline: '2024-02-01' }, deadline: { deadline: '2024-02-01', status: 'Delayed' } }
            ]);
            done();
        });
    });
});
