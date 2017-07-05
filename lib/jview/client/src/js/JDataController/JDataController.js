import React from 'react';
import {inject, observer} from 'mobx-react'
import {transformFormsetData} from '../JDataController/FormsetGenerator'
import {Panel, FormSet} from 'Components'
@inject('FormsetStore', 'DataStore')
@observer
export default class JDataController extends React.Component {


    reset(){
        this.props.FormsetStore.reset();
    }

    changeValue(value,param){
        this.props.FormsetStore.changeValue(value,param);
    }

    addData(){
        this.props.DataStore.createDataPoint(this.props.FormsetStore.map.x, this.props.FormsetStore.map.y)
    }

    render(){
        const {map} = this.props.FormsetStore;
        const formConfig = {
            reset: this.reset.bind(this),
            changeValue: this.changeValue.bind(this),
            addData: this.addData.bind(this)
        }
        const form = transformFormsetData(map);

        const panelData = {
            title: 'panel title',
            padding: '15px',
            hideBody: false,
            className: 'panelclass'
        }

        return(
            <div>
                <Panel {...panelData} title = "Control Panel">
                    <FormSet {...form} {...formConfig} />
                </Panel>
            </div>
        )
    }
};
