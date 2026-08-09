let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value;
    let rollNo = document.getElementById("rollNo").value;

    if (name === "" || rollNo === "") {
        alert("Please enter student name and roll number.");
        return;
    }

    students.push({
        name: name,
        rollNo: rollNo,
        present: 0,
        absent: 0
    });

    displayStudents();

    document.getElementById("studentName").value = "";
    document.getElementById("rollNo").value = "";
}

function markPresent(index) {
    students[index].present++;
    displayStudents();
}

function markAbsent(index) {
    students[index].absent++;
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student, index) => {

        let total = student.present + student.absent;

        let percentage = total === 0
            ? 0
            : ((student.present / total) * 100).toFixed(2);

        table.innerHTML += `
            <tr>
                <td>${student.rollNo}</td>
                <td>${student.name}</td>
                <td>${student.present}</td>
                <td>${student.absent}</td>
                <td>${percentage}%</td>
                <td>
                    <button onclick="markPresent(${index})">
                        Present
                    </button>

                    <button onclick="markAbsent(${index})">
                        Absent
                    </button>
                </td>
            </tr>
        `;
    });
      }
