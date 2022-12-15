const {readFile , writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err, res) => {
    if(err){
        console.log(`Error: ${err}`);
        return;
    }

    const first = res;

    readFile('./content/second.txt', 'utf8', (err,res) => {
        if(err){
            console.log(`Error: ${err}`);
            return;
        }

        const second = res;

        writeFile('./content/rsModuleAsync.txt', `Result: ${first},${second}`,
        (err,res) => {
            if(err){
                console.log(`Error: ${err}`);
                return;
            }
        });
    });
});