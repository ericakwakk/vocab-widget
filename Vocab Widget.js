const words = importModule("Vocab Words")

const papers = ["#8FD9EC", "#FF3B57", "#7CFFB0", "#B57BFF", "#E8FF5A", "#2F86FF", "#FFB3CB"]
const ink = new Color("#14110F")

function addRule(stack) {
    const rule = stack.addStack()
    rule.size = new Size(0, 1)
    rule.backgroundColor = ink
    rule.addSpacer()
}

const WIDGET_SIZES = {
    430: [364, 170],
    428: [364, 170],
    414: [360, 169],
    402: [348, 164],
    393: [338, 158],
    390: [338, 158],
    375: [329, 155],
}

function widgetSize() {
    const screen = Math.round(Device.screenSize().width)
    if (WIDGET_SIZES[screen]) return WIDGET_SIZES[screen]
    const scale = screen / 390
    return [Math.round(338 * scale), Math.round(158 * scale)]
}

const [WIDGET_WIDTH, WIDGET_HEIGHT] = widgetSize()
const COLUMN_WIDTH = WIDGET_WIDTH - 32
const WORD_AREA = WIDGET_HEIGHT - 24 - 4 - 47 - 12
const ADVANCE = 0.92
const INK = 0.9

const start = new Date(2026, 10, 19)
const today = new Date()
today.setHours(0, 0, 0, 0)
const dayNumber = Math.round((today - start) / 86400000)

const word = words[dayNumber % words.length]
const paper = papers[today.getDay()]

const widget = new ListWidget()
widget.backgroundColor = new Color(paper)

const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const day = today.getDay()

const files = FileManager.iCloud()
const path = files.joinPath(files.documentsDirectory(), `backgrounds/background-${day}-${dayNames[day]}.png`)
await files.downloadFileFromiCloud(path)
widget.backgroundImage = files.readImage(path)

widget.setPadding(12, 16, 12, 16)

widget.spacing = 0

addRule(widget)
widget.addSpacer()

const syllables = [...word.term].length
const wordSize = Math.min(COLUMN_WIDTH / (syllables * ADVANCE), WORD_AREA / 1.25)

const nudge = wordSize * 0.06
widget.addSpacer(nudge * 2)

const wordBox = widget.addStack()
wordBox.size = new Size(COLUMN_WIDTH, WORD_AREA - nudge * 2)
wordBox.centerAlignContent()

const term = wordBox.addText(word.term)
term.font = new Font("AppleSDGothicNeo-Bold", wordSize)
term.textColor = ink
term.lineLimit = 1

wordBox.addSpacer()

widget.addSpacer()
addRule(widget)

const caption = widget.addStack()
caption.setPadding(3, 0, 3, 0)

const romanization = caption.addText(word.romanization)
romanization.font = new Font("HelveticaNeue-Bold", 13)
romanization.textColor = ink

caption.addSpacer()

const translation = caption.addText(word.translation)
translation.font = new Font("HelveticaNeue", 13)
translation.textColor = ink

addRule(widget)

const exampleRow = widget.addStack()
exampleRow.setPadding(3, 0, 3, 0)

const example = exampleRow.addText(word.example)
example.font = new Font("AppleSDGothicNeo-Regular", 13)
example.textColor = ink
example.lineLimit = 1

addRule(widget)

if (config.runsInApp) {
    await widget.presentMedium()
}

Script.setWidget(widget)
Script.complete()