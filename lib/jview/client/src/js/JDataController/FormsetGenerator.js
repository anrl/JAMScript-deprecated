export function transformFormsetData (map) {
    const formList = [
        {
            type: 'select',
            dispLabel: 'RANDOM',
            value: map.device,
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
            value: map.x,
            trigger: 'changeValue',
            param: 'x'
        },
        {
            type: 'text',
            dispLabel: 'Y value',
            value: map.y,
            trigger: 'changeValue',
            param: 'y'
        },
        {
            type: 'select',
            dispLabel: 'Status',
            value: map.status ,
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