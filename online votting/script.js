document.getElementById("voteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let voterId = document.getElementById("voterId").value.trim();
    let candidates = document.getElementsByName("candidate");
    let selectedCandidate = "";

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].checked) {
            selectedCandidate = candidates[i].value;
            break;
        }
    }

    if (name === "" || voterId === "" || selectedCandidate === "") {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText =
            "⚠️ Please fill all fields before voting!";
        return;
    }

    // Simulated security check
    if (voterId.length < 5) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText =
            "❌ Invalid Voter ID!";
        return;
    }

    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText =
        "✅ Vote successfully cast for " + selectedCandidate;

    document.getElementById("voteForm").reset();
});
