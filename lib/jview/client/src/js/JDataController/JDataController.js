import React from 'react';
import {inject, observer} from 'mobx-react'
import {transformFormsetData} from '../JDataController/FormsetGenerator'
import {Panel, FormSet} from 'Components'
@inject('FormsetStore')
@observer
export default class JDataController extends React.Component {

    reset(){
        this.props.FormsetStore.reset();
    }

    changeValue(value,param){
        this.props.FormsetStore.changeValue(value,param);
    }

    render(){
        const {formset, y} = this.props.FormsetStore;
        const formList = formset.formList.toJSON();
        const actionList = formset.actionList.toJSON();
        const formConfig = {
            reset: this.reset.bind(this),
            changeValue: this.changeValue.bind(this)
        }
        const form = transformFormsetData(formList,actionList);

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
                    {y}
                </Panel>
            </div>
        )
    }
};
