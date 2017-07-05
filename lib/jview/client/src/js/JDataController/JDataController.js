import React from 'react';
import {inject, observer} from 'mobx-react'
import {transformFormsetData} from '../JDataController/FormsetGenerator'
import {Panel, FormSet} from 'Components'
import io from 'socket.io-client'

@inject('FormsetStore', 'DataStore')
@observer
export default class JDataController extends React.Component {

    componentDidMount(){
        if(!this.socket) {
            this.socket = io.connect('/')

        }
    }
    reset(){
        this.props.FormsetStore.reset();
    }

    changeValue(value,param){
        this.props.FormsetStore.changeValue(value,param);
    }

    addData(){
        var data = {}
        data.x=this.props.FormsetStore.map.x;
        data.y=this.props.FormsetStore.map.y;
        this.socket.emit('newDataPoint', data);
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
