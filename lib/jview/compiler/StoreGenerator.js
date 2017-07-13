const fs = require('fs');
const fsPath = require('fs-path')
module.exports = function(storeName, stores, pageDirectory){

    fsPath.writeFile(StoreFileDir(pageDirectory,storeName), '//Store File for '+storeName, function(err,data){
        if (err) throw err;
        console.log('Store File Created');

        var ws = fs.createWriteStream(StoreFileDir(pageDirectory,storeName), {flags:'a'});
        ws.writeLine=(str)=>{ws.write('\n');ws.write(str);};
        ws.writeLine(StoreFileDependencies);
        ws.writeLine(ClassName(storeName));
        stores.map((store,idx)=>{
            ws.writeLine("@observable array"+idx+" = ["+store.toString()+"]");
        })

        ws.writeLine(ClassFooter(storeName));
    });
}

const StoreFileDir = (pageDirectory,storeName) => {return pageDirectory+'/'+storeName+'.js'};
const ClassName = (storeName) => {return "class "+storeName+"{"};
const ClassFooter = (storeName) => {return "}\n\
var store = window.store = new " + storeName +";\n\
export default store"
}
const StoreFileDependencies = "import { autorun, observable, computed} from 'mobx';\n"
