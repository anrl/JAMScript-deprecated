import React from "react"
import {observer} from "mobx-react"
import Echarts from 'Echarts/Echarts'
import {formater} from 'Echarts/Formater'
import {Select, FixTable, Panel, FormSet,PlainTable} from 'Components'
import {transformTableData} from '../Util/TableGenerator'
import {inject} from 'mobx-react'
import io from 'socket.io-client'

@inject('DataStore','FormsetStore')
@observer
export default class DataPanel extends React.Component {
    componentWillMount(){
    }

    componentDidMount(){
        this.socket=io.connect('/')
        this.socket.on('news', function (data) {
            console.log(data);
        });
    }

    createNew(e) {
        if (e.which === 13) {
            this.props.store.createTodo(e.target.value);
            e.target.value = ""
        }
    }

    createDataPoint(e) {
        if (e.which === 13) {
            var result = e.target.value.split(",");
            let x = parseInt(result[0])
            let y = parseInt(result[1])
            this.props.dataStore.createDataPoint(x,y);
            e.target.value = ""
        }
    }

    filter(e) {
        this.props.store.filter = e.target.value
    }

    changeChart(value, params){
        if(value=='0'){
            this.props.dataStore.changeShowType('scatter');
        } else if (value=='1'){
            this.props.dataStore.changeShowType('graph');
        } else if (value=='2'){
            this.props.dataStore.changeShowType('pie');
        }
    }

    runSimulation(){
        let x = Math.floor((Math.random() * 5) + 1)+20;
        let y = Math.floor((Math.random() * 20) + 1);
        this.props.dataStore.createDataPoint(x, y);
    }

    render() {
        // const {todos, filter, filteredTodos} = this.props.store
        const {logger, showType} = this.props.DataStore;
        var devices = logger.toJSON().map(device => (device.toJSON()));
        var data = [];
        devices.forEach(function (e) {
            data.push(e.map(dataPoints => dataPoints.toJSON()))
        });
        var dataLists = [];
        data.forEach((device)=>(
            dataLists.push(device.map(d=> (
                <li>{d[0]+','+d[1]}</li>
            )))
        ))

        const panelData = {
            title: 'panel title',
            padding: '15px',
            hideBody: false,
            className: 'panelclass'
        }

        const table = transformTableData (dataLists)
        const actions = [
            {
                type: 'button',
                disabled: true,
                dispLabel: 'export',
                className: 'btn-default btn-before btn-before-export',
            }
        ]
        return <div>
            <Panel {...panelData} title = "Data Table" actions={actions}>
                <FixTable leftCol="0" rightCol="0" left="0" right="0" className='td-inner-txt'
                          tableList={table}/>
            </Panel>
            <Panel {...panelData} title = "Visualization" >
            <Echarts style={{width:'100%',height:'365px'}} option={formater(data,showType)}/>
            </Panel>
        </div>
    }

}


// <input type="checkbox" value={todo.complete} checked={todo.complete} onChange = {this.toggleComplete.bind(this, todo)}/>