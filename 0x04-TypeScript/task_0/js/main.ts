interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'solomon',
    lastName: 'chidera',
    age: 20,
    location: 'mowe'
};

const student2: Student = {
    firstName:'moniaar',
    lastName: 'ahmed',
    age: 20,
    location: 'lagos'
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
    // Create a table element
    const table: HTMLTableElement | null = document.createElement('table');
    table.border = '1';

    // Create the table header row
    const headerRow: HTMLTableRowElement = document.createElement('tr');
    const headerCell1: HTMLTableCellElement = document.createElement('th');
    headerCell1.textContent = 'First Name';
    const headerCell2: HTMLTableCellElement = document.createElement('th');
    headerCell2.textContent = 'Location';

    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    table.appendChild(headerRow);

    // Iterate over the studentsList array and create rows for each student
    studentsList.forEach(student => {
        const row: HTMLTableRowElement = document.createElement('tr');
        const firstNameCell: HTMLTableCellElement = document.createElement('td');
        const locationCell: HTMLTableCellElement = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });

    // Append the table to the document body
    document.body.appendChild(table);
}
