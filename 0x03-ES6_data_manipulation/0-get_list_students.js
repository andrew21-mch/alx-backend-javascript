#!/opt/node12/bin/node

    /*Create a function named getListStudents that returns an array of objects.

    Each object should have three attributes: id (Number), firstName (String), and location (String).
    */

function getListStudents(){
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
      ]
        return students;
}
