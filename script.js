function openModal() {
    const yourName = document.getElementById("yourName").value;

    const modal = document.getElementById("proposalModal");
    const resultContainer = document.getElementById("proposalResult");

    // You can customize the proposal message as needed
    resultContainer.innerHTML = `<p>Dear ${yourName},</p>
                                <p> Here a message for you from Anand ❤️</p> 
                                <p> I love you !!</p>
                                <p>Will you be mine special person?</p>
                                <p>Congratulations on making this commitment to yourself!</p>`;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("proposalModal");
    modal.style.display = "none";
}
