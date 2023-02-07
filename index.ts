import tl = require('azure-pipelines-task-lib/task');
type values = {
    n1 : number | string ;
    n2 : number | string ;
    op : string | undefined;
    result : number; 
};

function initVal(val : values){
    console.log("inside function initVal");
    return val
}
async function run() {
    try {
        const name1 : string | undefined = tl.getInput('name',true);

        console.log("echo name");
    }
    catch (e) {  
        console.error(e);
        return "Error";
    }
}


run();


