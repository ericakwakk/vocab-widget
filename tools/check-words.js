// Checks a word list against the content rules in DESIGN.md.
// Run from the project folder:
//   node tools/check-words.js            (Korean, Vocab Words.js)
//   node tools/check-words.js mandarin   (Mandarin, Mandarin Words.js)
//   node tools/check-words.js english    (English for Korean speakers, English Words.js)

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
    english: {
        file: "English Words.js",
        // English is counted in letters, not syllables. Spaces don't count.
        maxTerm: 12,
        term: /^[a-z' -]+$/,
        maxExample: 40,
        exampleForbidden: /[가-힣]/,
        exampleForbiddenName: "Korean",
        ending: /[.?!]$/,
        endingName: ". ? or !",
        // The "romanization" field holds the pronunciation written in Hangul.
        romanization: /^[가-힣 ]+$/,
        romanizationName: "Hangul",
        // Hangul is about twice as wide as Latin letters at 13 pt.
        maxCaption: 20,
        // English words change form (decide, decided), so the last two letters are dropped.
        stem: term => term.length > 5 ? term.slice(0, -2) : term,
        ignoreCase: true,
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

    const syllables = [...word.term.replace(/[\s-]/g, "")].length
    if (syllables > rules.maxTerm) problems.push(`${label}: term has ${syllables} syllables, ${rules.maxTerm} at most`)
    if (rules.term && !rules.term.test(word.term)) problems.push(`${label}: term should be lowercase letters`)

    const exampleLength = [...word.example].length
    if (exampleLength > rules.maxExample) problems.push(`${label}: example is ${exampleLength} characters, ${rules.maxExample} at most`)
    const forbidden = rules.exampleForbidden ?? /[A-Za-z]/
    if (forbidden.test(word.example)) problems.push(`${label}: example contains ${rules.exampleForbiddenName ?? "Latin"} letters`)
    if (!rules.ending.test(word.example)) problems.push(`${label}: example should end with ${rules.endingName}`)

    if (!rules.romanization.test(word.romanization)) problems.push(`${label}: romanization should be ${rules.romanizationName ?? "lowercase Latin letters"}`)
    if (word.translation !== word.translation.toLowerCase()) problems.push(`${label}: translation should be lowercase`)
    const captionLength = [...word.romanization].length + [...word.translation].length
    const maxCaption = rules.maxCaption ?? 42
    if (captionLength > maxCaption) problems.push(`${label}: romanization and translation are ${captionLength} characters together, ${maxCaption} at most`)

    if (seen.has(word.term)) problems.push(`${label}: duplicate of #${seen.get(word.term)}`)
    seen.set(word.term, index + 1)

    const stem = rules.stem(word.term)
    const example = rules.ignoreCase ? word.example.toLowerCase() : word.example
    if (!example.includes(stem)) warnings.push(`${label}: example may not use the word (looked for "${stem}")`)
})

console.log(`${words.length} ${language} words checked`)
if (warnings.length) console.log(`\n${warnings.length} to look at by eye:\n  ${warnings.join("\n  ")}`)
if (problems.length) {
    console.log(`\n${problems.length} problems:\n  ${problems.join("\n  ")}`)
    process.exit(1)
}
console.log("\nNo problems.")
