// Checks a word list against the content rules in DESIGN.md.
// Run from the project folder:
//   node tools/check-words.js            (Korean, Vocab Words.js)
//   node tools/check-words.js mandarin   (Mandarin, Mandarin Words.js)

const fs = require("fs")
const path = require("path")
const vm = require("vm")

const LANGUAGES = {
    korean: {
        file: "Vocab Words.js",
        maxTerm: 6,
        maxExample: 22,
        ending: /[.?!]$/,
        endingName: ". ? or !",
        romanization: /^[a-z' -]+$/,
        // Korean verbs conjugate, so only the first two syllables are looked for.
        stem: term => [...term].slice(0, 2).join(""),
    },
    mandarin: {
        file: "Mandarin Words.js",
        maxTerm: 4,
        maxExample: 18,
        ending: /[。？！]$/,
        endingName: "。？ or ！",
        romanization: /^[a-zāáǎàēéěèīíǐìōóǒòūúǔùüǖǘǚǜ' -]+$/,
        // Chinese words don't change form, so the whole word should appear.
        stem: term => term,
    },
}

const language = process.argv[2] ?? "korean"
const rules = LANGUAGES[language]
if (!rules) {
    console.log(`Unknown language "${language}". Use one of: ${Object.keys(LANGUAGES).join(", ")}`)
    process.exit(1)
}

const file = path.join(__dirname, "..", rules.file)
const sandbox = { module: { exports: null } }
vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox)
const words = sandbox.module.exports

const problems = []
const warnings = []
const seen = new Map()

words.forEach((word, index) => {
    const label = `#${index + 1} ${word.term ?? "(no term)"}`

    for (const field of ["term", "romanization", "translation", "example"]) {
        if (typeof word[field] !== "string" || word[field].trim() === "") problems.push(`${label}: missing ${field}`)
    }
    if (problems.length && !word.term) return

    const syllables = [...word.term.replace(/\s/g, "")].length
    if (syllables > rules.maxTerm) problems.push(`${label}: term has ${syllables} syllables, ${rules.maxTerm} at most`)

    const exampleLength = [...word.example].length
    if (exampleLength > rules.maxExample) problems.push(`${label}: example is ${exampleLength} characters, ${rules.maxExample} at most`)
    if (/[A-Za-z]/.test(word.example)) problems.push(`${label}: example contains Latin letters`)
    if (!rules.ending.test(word.example)) problems.push(`${label}: example should end with ${rules.endingName}`)

    if (!rules.romanization.test(word.romanization)) problems.push(`${label}: romanization should be lowercase Latin letters`)
    if (word.translation !== word.translation.toLowerCase()) problems.push(`${label}: translation should be lowercase`)
    const captionLength = word.romanization.length + word.translation.length
    if (captionLength > 42) problems.push(`${label}: romanization and translation are ${captionLength} characters together, 42 at most`)

    if (seen.has(word.term)) problems.push(`${label}: duplicate of #${seen.get(word.term)}`)
    seen.set(word.term, index + 1)

    const stem = rules.stem(word.term)
    if (!word.example.includes(stem)) warnings.push(`${label}: example may not use the word (looked for "${stem}")`)
})

console.log(`${words.length} ${language} words checked`)
if (warnings.length) console.log(`\n${warnings.length} to look at by eye:\n  ${warnings.join("\n  ")}`)
if (problems.length) {
    console.log(`\n${problems.length} problems:\n  ${problems.join("\n  ")}`)
    process.exit(1)
}
console.log("\nNo problems.")
