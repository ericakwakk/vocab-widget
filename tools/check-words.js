// Checks Vocab Words.js against the content rules in DESIGN.md.
// Run from the project folder: node tools/check-words.js

const fs = require("fs")
const path = require("path")
const vm = require("vm")

const file = path.join(__dirname, "..", "Vocab Words.js")
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
    if (syllables > 6) problems.push(`${label}: term has ${syllables} syllables, 6 at most`)

    const exampleLength = [...word.example].length
    if (exampleLength > 22) problems.push(`${label}: example is ${exampleLength} characters, 22 at most`)
    if (/[A-Za-z]/.test(word.example)) problems.push(`${label}: example contains Latin letters`)
    if (!/[.?!]$/.test(word.example)) problems.push(`${label}: example should end with . ? or !`)

    if (!/^[a-z' -]+$/.test(word.romanization)) problems.push(`${label}: romanization should be lowercase Latin letters`)
    if (word.translation !== word.translation.toLowerCase()) problems.push(`${label}: translation should be lowercase`)
    const captionLength = word.romanization.length + word.translation.length
    if (captionLength > 42) problems.push(`${label}: romanization and translation are ${captionLength} characters together, 42 at most`)

    if (seen.has(word.term)) problems.push(`${label}: duplicate of #${seen.get(word.term)}`)
    seen.set(word.term, index + 1)

    const stem = [...word.term].slice(0, 2).join("")
    if (!word.example.includes(stem)) warnings.push(`${label}: example may not use the word (looked for "${stem}")`)
})

console.log(`${words.length} words checked`)
if (warnings.length) console.log(`\n${warnings.length} to look at by eye:\n  ${warnings.join("\n  ")}`)
if (problems.length) {
    console.log(`\n${problems.length} problems:\n  ${problems.join("\n  ")}`)
    process.exit(1)
}
console.log("\nNo problems.")
