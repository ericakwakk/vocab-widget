// Builds a single-file Mandarin widget to send to a friend.
// It puts the words inside the script and downloads the grain backgrounds
// from the public GitHub repo the first time each one is needed.
//
// Run from the project folder, with the day she installs it:
//   node tools/bundle-mandarin.js 2026-11-22
// The file lands in share/Mandarin Widget.js

const fs = require("fs")
const path = require("path")
const vm = require("vm")

const root = path.join(__dirname, "..")
const IMAGES_URL = "https://raw.githubusercontent.com/ericakwakk/vocab-widget/main/backgrounds"

const startArg = process.argv[2]
if (!/^\d{4}-\d{2}-\d{2}$/.test(startArg ?? "")) {
    console.log("Give the start date as YYYY-MM-DD, for example: node tools/bundle-mandarin.js 2026-11-22")
    process.exit(1)
}
const [year, month, date] = startArg.split("-").map(Number)

const sandbox = { module: { exports: null } }
vm.runInNewContext(fs.readFileSync(path.join(root, "Mandarin Words.js"), "utf8"), sandbox)
const words = sandbox.module.exports

let script = fs.readFileSync(path.join(root, "Mandarin Widget.js"), "utf8")

function swap(before, after) {
    if (!script.includes(before)) {
        console.log(`Could not find this in Mandarin Widget.js, so the bundle was not built:\n${before}`)
        process.exit(1)
    }
    script = script.replace(before, after)
}

const wordLines = words.map(word => `    ${JSON.stringify(word)},`).join("\n")
swap(`const words = importModule("Mandarin Words")`, `const words = [\n${wordLines}\n]`)

swap(/const start = new Date\(.*\)/.exec(script)?.[0] ?? "const start = new Date(",
    `const start = new Date(${year}, ${month - 1}, ${date})`)

swap(`const files = FileManager.iCloud()
const path = files.joinPath(files.documentsDirectory(), \`backgrounds/background-\${day}-\${dayNames[day]}.png\`)
await files.downloadFileFromiCloud(path)
widget.backgroundImage = files.readImage(path)`,
`const files = FileManager.local()
const folder = files.joinPath(files.documentsDirectory(), "vocab-backgrounds")
if (!files.fileExists(folder)) files.createDirectory(folder)
const imageName = \`background-\${day}-\${dayNames[day]}.png\`
const path = files.joinPath(folder, imageName)
if (!files.fileExists(path)) {
    try {
        const image = await new Request(\`${IMAGES_URL}/\${imageName}\`).loadImage()
        files.writeImage(path, image)
    } catch (error) {
        // No internet yet: show the plain paper color today and try again tomorrow.
    }
}
if (files.fileExists(path)) widget.backgroundImage = files.readImage(path)`)

fs.mkdirSync(path.join(root, "share"), { recursive: true })
fs.writeFileSync(path.join(root, "share", "Mandarin Widget.js"), script)
console.log(`Built share/Mandarin Widget.js with ${words.length} words, starting ${startArg}`)
