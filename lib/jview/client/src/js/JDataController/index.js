import React from 'react';
import {inject, observer} from 'mobx-react'
import {Panel, FormSet} from 'Components'
import io from 'socket.io-client'

@inject('FormsetStore')
@observer
export default class JDataController extends React.Component {

    componentDidMount(){
        if(!this.socket) {
            this.socket = io.connect('/')
        }
    }

    addData(){
        var data = {}
        data.x=this.props.FormsetStore.map.x;
        data.y=this.props.FormsetStore.map.y;
        this.socket.emit('newDataPoint', data);
    }

    render(){
        const {formset} = this.props.FormsetStore;
        const formConfig = {
            reset: this.props.FormsetStore.reset.bind(this.props.FormsetStore),
            changeValue: this.props.FormsetStore.changeValue.bind(this.props.FormsetStore),
            addData: this.addData.bind(this)
        }

        const panelData = {
            title: 'panel title',
            padding: '15px',
            hideBody: false,
            className: 'panelclass'
        }

        return(
            <div>
                <Panel {...panelData} title = "Control Panel">
                    <FormSet {...formset} {...formConfig} />
                </Panel>
            </div>
        )
    }
};
