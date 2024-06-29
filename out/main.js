speechSynthesis.addEventListener("voiceschanged", () => {
    const voices = speechSynthesis.getVoices();
    const tbody = document.querySelector("tbody");
    for (const { default: isDefault, lang, localService: isLocalService, name, voiceURI } of voices) {
        const node = document.createElement("tr");
        node.innerHTML = `<td>${isDefault}</td>
<td>${lang}</td>
<td>${isLocalService}</td>
<td>${name}</td>
<td>${voiceURI}</td>`;
        tbody.appendChild(node);
    }
    document.querySelector("#launch").addEventListener("click", () => {
        speechSynthesis.cancel();
        const voice0 = voices.find(({ voiceURI }) => voiceURI === "Microsoft Paul - French (France)");
        const voice1 = voices.find(({ voiceURI }) => voiceURI === "Microsoft Hortense - French (France)");
        const voice2 = voices.find(({ voiceURI }) => voiceURI === "Microsoft Julie - French (France)");
        const utterance0 = new SpeechSynthesisUtterance(" - Est-ce que vous êtes venu me tuer ?");
        utterance0.voice = voice0;
        const utterance1 = new SpeechSynthesisUtterance("demanda Quentin sans même regarder qui venait d’ouvrir la porte censée être fermée à clé.");
        utterance1.voice = voice1;
        const utterance2 = new SpeechSynthesisUtterance(" — Non, ");
        utterance2.voice = voice2;
        const utterance3 = new SpeechSynthesisUtterance("grogna Teia en rangeant ses crochets.");
        utterance3.voice = voice1;
        const utterance4 = new SpeechSynthesisUtterance(" — Dans ce cas, je vous prierais d’attendre un moment.");
        utterance4.voice = voice0;
        const utterance5 = new SpeechSynthesisUtterance("  Il termina d’écrire une longue phrase, puis utilisa une brosse en poil de sanglier et de l’eau savonneuse pour nettoyer la pointe de sa plume. Il saupoudra le parchemin de sable fin pour absorber le surplus d’encre, ouvrit une boîte, y rangea son matériel et en tira un nouveau parchemin plié en quatre avant de la refermer.");
        utterance5.voice = voice1;
        // utterance.lang = "de-DE";
        for (const utterance of [utterance0, utterance1, utterance2, utterance3, utterance4, utterance5]) {
            speechSynthesis.speak(utterance);
        }
        window.setInterval(() => {
            speechSynthesis.resume();
        }, 14_000);
    });
    document.querySelector("#pause-resume").addEventListener("click", () => {
        speechSynthesis.paused ? speechSynthesis.resume() : speechSynthesis.pause();
    });
});
//# sourceMappingURL=main.js.map