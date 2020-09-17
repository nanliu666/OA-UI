import Transfer from './src/transfer.vue';
Transfer.mgName = 'MgTransfer'
/* istanbul ignore next */
Transfer.install = function(Vue) {
  Vue.component(Transfer.Mgname, Transfer);
};

export default Transfer;

