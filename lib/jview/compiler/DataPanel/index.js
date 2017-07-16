// Root File for Page Data Panel
import React from 'react';
import {inject, observer} from 'mobx-react'
import {transformFormsetData} from '../JDataController/FormsetGenerator'
import {Panel, FormSet} from 'Components'
import io from 'socket.io-client'


@inject(undefined)
@observer