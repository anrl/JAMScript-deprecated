export function transformTableData (dataPoints){
    var centerBody = [], count = 0
    var header = [
        {
            type:' plain',
            valueLabel: 'Working Code',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Status',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Client',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Operating Name',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'GST',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'QST',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'NEQ',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'GQST Period',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'YearEnd',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Finished YE',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Register Date',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Clic Séqur Express',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'ClicSequr',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'CRA',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Phone',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Fax',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Email Address',
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
            type:' plain',
            valueLabel: 'Home Address',
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
                valueLabel: 'M',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Active',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '9281-4557 Québec inc',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Luying yuan',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Hai Long',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '815972732',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '1220224895',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '1169109676',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'Monthly',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '2017-7-1',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '2018-7-1',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '2016-12-22',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'ES0GGZO',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'ES0GGZO',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '514-806-0532',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '514-806-0532',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: 'plaassault@hotmail.com',
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
                valueLabel: 'J4X1K8',
                className: ' td-text-right'
            },
            {
                type:' plain',
                valueLabel: '',
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
            valueLabel: 'A',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Active',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '9281-4557 Québec inc',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Luying yuan',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Hai Long',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '815972732',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '1220224895',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '1169109676',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'Monthly',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '2017-7-1',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '2018-7-1',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '2016-12-22',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'ES0GGZO',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'ES0GGZO',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '514-806-0532',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '514-806-0532',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: 'plaassault@hotmail.com',
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
            valueLabel: 'J4X1K8',
            className: ' td-text-right'
        },
        {
            type:' plain',
            valueLabel: '',
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


    return {
        leftHeader: [],
        rightHeader: [],
        centerHeader: header,
        leftBody: [],
        rightBody: [],
        centerBody: centerBody
    }
}