export function transformTableData (dataPoints){
    const checkBox = {className: '', list: [{type: 'checkbox', value: false, trigger: 'valueChange'}]};

    var centerBody = [], count = 0
    var header = [
        {
            type:' plain',
            valueLabel: 'Device',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Status',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Operating Name',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Log Time',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Register Date',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Street',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'City',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Province',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Postal Code',
            className: ' td-text-right'
        },
        {
            type: ' plain',
            valueLabel: 'Notes',
            className: ' td-text-right'
        }
    ]

        var array = [
            {
                type:' plain',
                valueLabel: 'Device 1',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Active',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '9281-4557',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Jun 7 16:34:32',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '2016-Mar',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '1860 crois. Séguin',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Montreal',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Quebec',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'J4X1K8',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '',
                className: ' td-text-right'
            }
            ]
    var array1 = [
        {
            type:' plain',
            valueLabel: 'Device 2',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Active',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '9281-4231',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Jun 2 12:43:24',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '2016-Mar',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '1860 crois. Séguin',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Brossard',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Quebec',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'J4X1K8',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '',
            className: ' td-text-right'
        }
    ]
    centerBody.push({className: '',list: array})
    centerBody.push({className: '',list: array})

    centerBody.push({className: '',list: array1})
    centerBody.push({className: '',list: array1})
    var arrayOfCheckBoxes = [];
    arrayOfCheckBoxes.push({
        className: '',
        list: [{type: 'checkbox', param: 1, value: false, trigger: 'setCheckBox', className: 'td-text-center'}]
    });
    arrayOfCheckBoxes.push({
        className: '',
        list: [{type: 'checkbox', param: 2, value: false, trigger: 'setCheckBox', className: 'td-text-center'}]
    });arrayOfCheckBoxes.push({
        className: '',
        list: [{type: 'checkbox', param: 3, value: false, trigger: 'setCheckBox', className: 'td-text-center'}]
    });arrayOfCheckBoxes.push({
        className: '',
        list: [{type: 'checkbox', param: 4, value: false, trigger: 'setCheckBox', className: 'td-text-center'}]
    });

    return {
        leftHeader: [{type: 'checkbox', value: false, trigger: 'selectAll', className: 'td-text-center'}],
        leftBody: arrayOfCheckBoxes,
        rightHeader: [],
        centerHeader: header,
        rightBody: [],
        centerBody: centerBody
    }
}