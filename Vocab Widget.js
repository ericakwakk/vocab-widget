const words = [
    { term: "곱씹다", romanization: "gopssipda", translation: "to mull over", example: "그 말을 몇 번이고 곱씹어 봤다." },
    { term: "실마리", romanization: "silmari", translation: "a clue, a lead", example: "드디어 문제를 풀 실마리를 찾았다." },
    { term: "번거롭다", romanization: "beongeoropda", translation: "cumbersome, a hassle", example: "서류를 다시 내는 게 너무 번거롭다." },
]

const papers = ["#8FD9EC", "#FF3B57", "#7CFFB0", "#B57BFF", "#E8FF5A", "#2F86FF", "#FFB3CB"]
const ink = new Color("#14110F")

const start = new Date(2026, 10, 19)
const today = new Date()
today.setHours(0, 0, 0, 0)
const dayNumber = Math.round((today - start) / 86400000)

const word = words[dayNumber % words.length]
const paper = papers[today.getDay()]

const widget = new ListWidget()
widget.backgroundColor = new Color(paper)

for (const line of [word.term, word.romanization, word.translation, word.example]) {
    const text = widget.addText(line)
    text.textColor = ink
}

if (config.runsInApp) {
    await widget.presentMedium()
}

Script.setWidget(widget)
Script.complete()