var fsPath = require('fs-path');
var fs = require('fs');
var storeGenerator = require('./StoreGenerator.js')
module.exports = function (pages){

    pages.map(page=>{
        if(page.name) {
        // dive into the panels first, because you need to know the list of stores needed for your panels
        // so you need to generate data layers files before writing to index.js, the main page
        page.panels.map((panel,idx)=>{
            storeGenerator(StoreFileName(panel.type), panel, PageDirectory(page.name)); //@ todo future problem with too many files with the same name?
        });

        //After knowing the store, generate page file in ES6 and React
        fsPath.writeFile(RootFileName(page.name), '// Root File for Page ' + page.name, function (err, data) {
            if (err) throw err;
            console.log('Root File Created');

            // Create a write stream, and add in the writeLine() method
            var ws = fs.createWriteStream(RootFileName(page.name), {flags: 'a'})
            ws.writeLine = (str)=>{ws.write('\n');ws.write(str);};
            ws.writeLine(RootFileDependencies);
            ws.writeLine(StoreInjection())
            
        });
        } else {
            console.log('Page Name Missing')
        }
    });
}

// Static Asset for Code Generation
const PageDirectory = (pageName) => {return __dirname+'/'+pageName.replace(/\s/g, '')};
const StoreFileName = (panelName) => {return panelName+'Store'};
const RootFileName = (pageName) => {return PageDirectory(pageName)+'/index.js'};
const RootFileDependencies = "import React from 'react';\n\
import {inject, observer} from 'mobx-react'\n\
import {transformFormsetData} from '../JDataController/FormsetGenerator'\n\
import {Panel, FormSet} from 'Components'\n\
import io from 'socket.io-client'\n\
"
const StoreInjection = (storeNames) => {return "\n@inject("+storeNames+")\n@observer"};