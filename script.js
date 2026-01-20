function login() {
  const role = document.getElementById("role").value;

  if (role === "student") {
    window.location.href = "student.html";
  } else {
    window.location.href = "teacher.html";
  }
}

function submitComplaint() {
  const complaint = document.getElementById("complaint").value;
  localStorage.setItem("complaint", complaint);
  localStorage.setItem("status", "Pending");

  alert("Complaint submitted!");
}

function markSolved() {
  localStorage.setItem("status", "Solved");
  alert("Marked as solved!");
}

window.onload = function () {
  const status = localStorage.getItem("status");
  const complaint = localStorage.getItem("complaint");

  if (document.getElementById("status")) {
    document.getElementById("status").innerText = status || "No complaint submitted";
  }

  if (document.getElementById("complaintText")) {
    document.getElementById("complaintText").innerText = complaint || "No complaints yet";
  }
};
