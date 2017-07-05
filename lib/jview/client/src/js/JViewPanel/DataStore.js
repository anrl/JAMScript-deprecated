import { autorun, observable, computed} from "mobx"

import React, { PropTypes } from 'react'
import echarts from 'echarts'
import resize from 'element-resize-event'
import Echarts from '../../lib/Echarts/Echarts'


class DataStore {
    @observable logger  = [[[1,2],[2,3],[3,3],[4,4],[5,2],[7,4]],
                                 [[3,4],[5,4],[7,1],[9,7],[10,10],[24,4]]
                                ];
    @observable showType = 'pie'

    createDataPoint(x,y){
        this.logger[0].push([x,y])
    }
    
    changeShowType(result){
        this.showType = result;
    }
}

var store = window.store = new DataStore;

export default store
