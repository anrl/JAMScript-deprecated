import { autorun, observable, computed} from "mobx"

class FormsetStore {
    @observable formset = {
        formList:[
            {
                type: 'select',
                dispLabel: 'Working Code',
                value: 0 ,
                list:[
                    {dispLabel:'M',id:'M'},
                    {dispLabel:'H',id:'H'},
                    {dispLabel:'L',id:'L'},
                    {dispLabel:'Z',id:'Z'},
                ],
                trigger: 'changeValue',
                param: 0
            },
            {
                type: 'text',
                dispLabel: 'X value',
                value: 0.0,
                trigger: 'changeValue',
                param: 1
            },
            {
                type: 'text',
                dispLabel: 'Y value',
                value: 0.0,
                trigger: 'changeValue',
                param: 2
            },
            {
                type: 'select',
                dispLabel: 'Status',
                value: 0 ,
                list:[
                    {dispLabel:'A',id:'A'},
                    {dispLabel:'NA',id:'NA'}
                ],
                trigger: 'changeValue',
                param: 3
            }
        ], actionList: [
            {
                type:'button',
                dispLabel: 'Add',
                value: '',
                className: 'btn-primary',
                trigger: 'AddValue'
            },
            {
                type:'button',
                dispLabel: 'Reset',
                value: '',
                className: 'btn-default',
                trigger: 'reset'
            }
        ]
    }

    @observable y=0

    reset(){
        this.formset.formList[0].value=0;
        this.formset.formList[1].value=0;
        this.formset.formList[2].value=0;
        this.formset.formList[3].value=0;
    }

    changeValue(value,param){
        this.formset.formList[param].value=value;
        console.log(this.formset.formList[param].value)
        this.y++;
    }
}

var store = window.store = new FormsetStore;

export default store
