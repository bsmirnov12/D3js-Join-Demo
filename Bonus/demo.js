var students = [
    { student: 'Alice',   grade: 95 },
    { student: 'Bob',     grade: 90 },
    { student: 'Charlie', grade: 85 },
    { student: 'Frank',   grade: 75 }
];
//    { student: 'Daniel',  grade: 80 },
//    { student: 'Eve',     grade: 99 },

console.log(students);
var table = d3.select('table');


// Table header
var columns = Object.keys(students[0])
console.log(columns);

table.append('thead').append('tr')
    .selectAll('th')
    .data(columns)
    .join('th')
        .attr('scope', 'col')
        .text(v => v);


// Table body
console.log(Object.values(students[0]));

table.append('tbody')
    .selectAll('tr')
    .data(students)
    .join('tr')
        .selectAll('td')
        .data(student => Object.values(student))
        .join('td')
            .text(v => v);


// Content update
var tbody = table.select('tbody');

tbody.selectAll('tr')
    .data(students)
    .join('tr')
        .selectAll('td')
        .data(student => Object.values(student))
        .join('td')
            .text(v => v);
