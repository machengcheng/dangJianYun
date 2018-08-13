import Mock from 'mockjs';
import axios from 'axios';
import MockAdapter from  'axios-mock-adapter';

//获取随机车牌号码
function getPlateNumber () {
    let provinces = new Array('京', '粤', '皖', '闽', '甘', '桂', '贵', '琼', '冀', '豫', '黑', '鄂', '湘', '吉', '苏', '赣', '辽', '蒙', '宁', '青', '鲁', '晋', '陕', '沪', '川', '津', '藏', '新', '云', '浙', '渝', '港', '澳', '台');
    let provinceIndex = parseInt(Math.random() * 33);
    var shi = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    var carId = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    var shiIndex = parseInt(Math.random() * 25);
    //console.info("随机生成0-25之间的数（包含0和25）：" + shiIndex);
    var carNumber = provinces[provinceIndex] + shi[shiIndex] + " · ";
    for(var i = 0; i < 5; i++) {
        carNumber += carId[parseInt(Math.random() * carId.length - 1)];
    }
    return carNumber;
}

/**
 * 我的关注
 * @type {Array}
 */
const getMyFocusList = [];

for (let i = 0; i < 15; i++) {
    getMyFocusList.push(Mock.mock({
        'id|1'            : Mock.Random.guid(),
        'plateNumber'     : getPlateNumber(),
        'plateColor|1'    : ['红', '黄', '灰', '金', '白', '黑', '绿', '蓝'],
        'brand|1'         : ['奔驰', '宝马', '奥迪', '路虎', '沃尔沃', '现代', 'BYD', 'KIA', '东风日产', '丰田'],
        'searchTime'      : '@datetime',
        'discovery|1'     : ['信息1', '信息2', '信息3', '信息4', '信息5', '信息6', '信息7', '信息8']
    }));
}

/**
 * 我的布控
 * @type {Array}
 */
const getMyMonitorList = [];

for (let i = 0; i < 15; i++) {
	getMyMonitorList.push(Mock.mock({
		'id|1'            : Mock.Random.guid(),
		'plateNumber'     : getPlateNumber(),
		'plateColor|1'    : ['红', '黄', '灰', '金', '白', '黑', '绿', '蓝'],
		'bodyColor|1'     : ['红', '黄', '灰', '金', '白', '黑', '绿', '蓝'],
		'carType|1'       : ['小型车', '小型货车', '小型客车', '大货车', '半挂车'],
		'startTime'       : '@datetime',
		'endTime'         : '@datetime',
		'reason|1'        : ['嫌疑车', '紧急查控车'],
		'status|1'        : ['已布控', '布控中']
	}));
}

export default {

    bootstrap() {

        let mock = new MockAdapter(axios);

        // mock success request
        mock.onGet('/success').reply(200, {
            msg: 'success'
        });

        // mock error request
        mock.onGet('/error').reply(500, {
            msg: 'failure'
        });

        //我的关注(分页)
        mock.onGet('/sql/getMyFocusList').reply(config => {
            let { page } = config.params;
            let mockMFocus = getMyFocusList.filter(table => {
                return true;
            });
            let total = mockMFocus.length;
            mockMFocus = mockMFocus.filter((u, index) => index < 10 * page && index >= 10 * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        total: total,
                        list: mockMFocus
                    }]);
                }, 1000);
            });
        });


	    //我的布控(分页)
	    mock.onGet('/user/getMyMonitorList').reply(config => {
		    let {page, plateNumber, plateColor, bodyColor, status, reason} = config.params;
		    let mockMonitor = getMyMonitorList.filter(monitor => {
			    if (plateNumber && monitor.plateNumber.indexOf(plateNumber) == -1) {
				    return false;
			    }
			    if (plateColor && monitor.plateColor.indexOf(plateColor) == -1) {
				    return false;
			    }
			    if (bodyColor && monitor.bodyColor.indexOf(bodyColor) == -1) {
				    return false;
			    }
			    if (status && monitor.status.indexOf(status) == -1) {
				    return false;
			    }
			    if (reason && monitor.reason.indexOf(reason) == -1) {
				    return false;
			    }
			    return true;
		    });
		    let total = mockMonitor.length;
		    mockMonitor = mockMonitor.filter((u, index) => index < 10 * page && index >= 10 * (page - 1));
		    return new Promise((resolve, reject) => {
			    setTimeout(() => {
				    resolve([200, {
					    total: total,
					    list: mockMonitor
				    }]);
			    }, 1000);
		    });
	    });

    }
}

