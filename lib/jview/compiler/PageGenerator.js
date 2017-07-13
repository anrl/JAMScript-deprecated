var fsPath = require('fs-path');
var fs = require('fs');
var storeGenerator = require('./StoreGenerator.js')
module.exports = function (pages){

    pages.map(page=>{
        // dive into the panels first, because you need to know the list of stores needed for your panels
        // so you need to generate data layers files before writing to index.js, the main page
        page.panels.map((panel,idx)=>{
            storeGenerator(StoreFileName(panel.type), panel.stores,PageDirectory(page.name));
        });
        if(page.name) {

            fsPath.writeFile(RootFileName(page.name), '// Root File for Page ' + page.name, function (err, data) {
                if (err) throw err;
                console.log('Root File Created');

                var ws = fs.createWriteStream(RootFileName(page.name), {flags: 'a'})
                ws.writeLine = (str)=>{ws.write('\n');ws.write(str);};
                ws.writeLine(RootFileDependencies);
            });
        }
    });
}
const PageDirectory = (pageName) => {return __dirname+'/'+pageName.replace(/\s/g, '')};
const StoreFileName = (typeName) => {return typeName+'Store'};
const RootFileName = (pageName) => {return PageDirectory(pageName)+'/index.js'};
const RootFileDependencies = "import React from 'react';\n\
import {inject, observer} from 'mobx-react'\n\
import {transformFormsetData} from '../JDataController/FormsetGenerator'\n\
import {Panel, FormSet} from 'Components'\n\
import io from 'socket.io-client'\n\
"

