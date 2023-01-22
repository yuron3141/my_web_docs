const { program } = require('commander');
const fs = require('fs');

const marked = require('marked');

program.parse(process.argv);
const filePath = program.args[0];
const file = program.args[1];
const outputLocate = program.args[2];

fs.readFile(filePath, 'utf-8', (err, file) => {
    if (err) {
        console.log(err.toString());
        return;
    };

    // MarkdownファイルをHTML文字列に変換する
    const htmlParsed = marked.parse(file);

    fs.readFile('src/template.html', 'utf-8', (err, file2) => {
        if (err) {
            console.log(err.toString());
            return;
        };

        const formerHtml = file2;

        const newHtml = formerHtml.replace(":here:", htmlParsed);

        fs.writeFile('src/index.html', newHtml, (err) => {
            if (err) {
                console.log(err.toString());
                return;
            }
    
            console.log("Completed");
        });
    })
});
