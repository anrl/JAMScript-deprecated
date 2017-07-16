import { autorun, observable, computed} from "mobx"

class FormsetStore {
    @observable map = {
        device: 0,
        x: 0,
        y: 0,
        status: 0,
    }
    
    reset(){
        this.map.device=0;
        this.map.x=0;
        this.map.y=0;
        this.map.status=0;
    }

    changeValue(value,param){
        this.map[param]=value;
    }
    @computed get formset(){
        const formList = [
            {
                type: 'select',
                dispLabel: 'RANDOM',
                value: this.map.device,
                list:[
                    {dispLabel:'Device1',id:'M'},
                    {dispLabel:'Device2',id:'H'},
                    {dispLabel:'Device3',id:'L'},
                    {dispLabel:'Device4',id:'Z'},
                ],
                trigger: 'changeValue',
                param: 'device'
            },
            {
                type: 'text',
                dispLabel: 'X value',
                value: this.map.x,
                trigger: 'changeValue',
                param: 'x'
            },
            {
                type: 'text',
                dispLabel: 'Y value',
                value: this.map.y,
                trigger: 'changeValue',
                param: 'y'
            },
            {
                type: 'select',
                dispLabel: 'Status',
                value: this.map.status ,
                list:[
                    {dispLabel:'A',id:'A'},
                    {dispLabel:'NA',id:'NA'}
                ],
                trigger: 'changeValue',
                param: 'status'
            }
        ]
        const actionList = [
            {
                type:'button',
                dispLabel: 'Add',
                value: '',
                className: 'btn-primary',
                trigger: 'addData'
            },
            {
                type:'button',
                dispLabel: 'Reset',
                value: '',
                className: 'btn-default',
                trigger: 'reset'
            }
        ]
        return {
            formList: formList,
            actionList: actionList,
            className: ' formset2 whiteBgColor',
            columns: 1
        }
    }
}

var store = window.store = new FormsetStore;

export default store
