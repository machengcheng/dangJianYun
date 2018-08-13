// import Vue from 'vue';
//
// let myTestDir = {};
// myTestDir.install = function () {
//
//     Vue.directive('my-test', {
//         bind: function (el, binding) {
//             el.innerHTML = binding.value.type + ':' + binding.value.name;
//             el.style.backgroundColor = '#409EFF';
//             el.style.fontSize = '18px';
//             el.style.color = '#FFF';
//             console.info('==========自定义指令my-test:00');
//             console.info(binding);
//             console.info('==========自定义指令my-test:11');
//         },
//         update: function () {
//
//         },
//         unbind: function () {
//
//         }
//     });
//
// };
//
// export default myTestDir;

const events = '@events';

export default {

    install(Vue) {

        Vue.directive('my-test', {
            bind: function (el, binding) {
                // el.innerHTML = binding.value.type + ':' + binding.value.name;
                el.style.backgroundColor = '#409EFF';
                el.style.fontSize = '18px';
                el.style.color = '#FFF';
                let Handler = function () {
                    alert('自定义指令事件ceshi');
                };

                el[events] = {
                    Handler
                };

                console.info('==========自定义指令my-test:00');
                console.info(el[events]);
                console.info('==========自定义指令my-test:11');

                el.addEventListener('click', el[events].Handler);
                console.info('==========自定义指令:00');
                console.info(el);
                console.info('==========自定义指令:11');
            },
            update: function (el, binding) {
                alert('更新: update');
                console.info('==========自定义指令update:00');
                console.info(binding);
                console.info('==========自定义指令update:11');
            },
            unbind: function (el, binding) {alert('解绑: unbind');
                console.info('==========自定义指令unbind:00');
                console.info(binding);
                console.info('==========自定义指令unbind:11');
                el.removeEventListener('click', el[events].Handler);
            }
        });

        Vue.directive('my-demo', {
            bind: function (el, binding) {
                el.innerHTML = 'demo案例: ' + binding.value.title;
            }
        });

    }

}
