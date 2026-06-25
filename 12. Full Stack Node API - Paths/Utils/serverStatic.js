import path from 'node:path'

export function serverStatic(baseDir) {
    const filePath = path.join(baseDir, 'Public', 'index.html')
    console.log(filePath)
}