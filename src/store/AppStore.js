import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as actions from './actions';
import * as getters from './getters';

const state = {
    show: 'mcc马成成',
    fixedTabs: [
        {
            label: '门户概览',
            name: '/home/myView',
            content: '门户概览内容',
            closable: false
        },
        {
            label: '应用中心',
            name: '/home/appCenter',
            content: '应用中心内容',
            closable: false
        }
    ],
    myCenterCurrentTab: '/home/myView/myFocus',
    illegalDataConditions: {
	    detectTime: '',
	    plateNumber: ''
    }
};

const mutations = {
    ADD_TAB(state, tab) {
        state.fixedTabs.push(tab);
    },
    DEL_TAB(state, tabName) {
        state.fixedTabs.forEach((tab, index) => {
            if (tab.name === tabName) {
                state.fixedTabs.splice(index, 1);
            }
        });
    },
    SET_MY_CENTER_TAB(state, tabName) {
        state.myCenterCurrentTab = tabName;
    },
	ILLEGAL_DATA_SEARCH(state, data) {
    	state.illegalDataConditions.detectTime = data.detectTime ? data.detectTime : '';
    	state.illegalDataConditions.plateNumber = data.plateNumber ? data.plateNumber : '';
	}
};

export default new Vuex.Store({
    state: state,
    actions: actions,
    getters: getters,
    mutations: mutations
});
