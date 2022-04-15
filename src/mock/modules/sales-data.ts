/**
 * @desc 销售数据相关的接口
 */
// 获取销售数据
const salesData = {
  url: '/sales/salesCampusClub/homeTotal',
  method: 'get',
  response: () => {
    return {
      'code': 200,
      'message': '请求成功',
      'timestamp': '2021-06-08 11:00:39',
      'data': {
        'total': {
          'fullName': '市场部',
          'orderRentalSum': 0.0,
          'orderNum': 0,
          'scanNum': 0,
          'identifyNum': 0,
          'orderingNum': 0,
          'noScanOrderingNum': 0,
          'orderInApprovalNum': 0,
          'orderPassNum': 0,
          'orderRejectNum': 0,
          'orderWaitPayNum': 0,
          'orderWaitDeliverNum': 0,
          'orderWaitReceiveNum': 0
        },
        'partPage': {
          'current': 1,
          'size': 10,
          'total': 5,
          'pages': 1,
          'searchCount': true,
          'hitCount': false,
          'records': [{
            'pageType': 'orgCenter',
            'fullName': '天津运营中心',
            'queryId': '1287953047955312640',
            'orderRentalSum': 0.0,
            'orderNum': 0,
            'scanNum': 0,
            'identifyNum': 0,
            'orderingNum': 0,
            'noScanOrderingNum': 0,
            'orderInApprovalNum': 0,
            'orderPassNum': 0,
            'orderRejectNum': 0,
            'orderWaitPayNum': 0,
            'orderWaitDeliverNum': 0,
            'orderWaitReceiveNum': 0
          }, {
            'pageType': 'orgCenter',
            'fullName': '广州营销中心',
            'queryId': '1364507633364635648',
            'orderRentalSum': 0.0,
            'orderNum': 0,
            'scanNum': 0,
            'identifyNum': 0,
            'orderingNum': 0,
            'noScanOrderingNum': 0,
            'orderInApprovalNum': 0,
            'orderPassNum': 0,
            'orderRejectNum': 0,
            'orderWaitPayNum': 0,
            'orderWaitDeliverNum': 0,
            'orderWaitReceiveNum': 0
          }, {
            'pageType': 'orgCenter',
            'fullName': '笑联科技',
            'queryId': '1332245216735924224',
            'orderRentalSum': 0.0,
            'orderNum': 0,
            'scanNum': 0,
            'identifyNum': 0,
            'orderingNum': 0,
            'noScanOrderingNum': 0,
            'orderInApprovalNum': 0,
            'orderPassNum': 0,
            'orderRejectNum': 0,
            'orderWaitPayNum': 0,
            'orderWaitDeliverNum': 0,
            'orderWaitReceiveNum': 0
          }, {
            'pageType': 'orgCenter',
            'fullName': '西安运营中心',
            'queryId': '1281135036929806336',
            'orderRentalSum': 0.0,
            'orderNum': 0,
            'scanNum': 0,
            'identifyNum': 0,
            'orderingNum': 0,
            'noScanOrderingNum': 0,
            'orderInApprovalNum': 0,
            'orderPassNum': 0,
            'orderRejectNum': 0,
            'orderWaitPayNum': 0,
            'orderWaitDeliverNum': 0,
            'orderWaitReceiveNum': 0
          }, {
            'pageType': 'orgCenter',
            'fullName': '成都运营中心',
            'queryId': '1287952972122296320',
            'orderRentalSum': 0.0,
            'orderNum': 0,
            'scanNum': 0,
            'identifyNum': 0,
            'orderingNum': 0,
            'noScanOrderingNum': 0,
            'orderInApprovalNum': 0,
            'orderPassNum': 0,
            'orderRejectNum': 0,
            'orderWaitPayNum': 0,
            'orderWaitDeliverNum': 0,
            'orderWaitReceiveNum': 0
          }]
        }
      }
    };
  }
};

module.exports = [
  salesData
];
