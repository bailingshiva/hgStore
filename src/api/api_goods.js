import a_service from '../a_service/a_service';
export function get_GoodsList(params) {
  return new a_service({
    url: '/api/get_goods_list',
    method: 'get',
    params
  })
}
export function add_Goods(params) {
  return new a_service({
    url: '/api/insert_goods_list',
    method: 'post',
    params
  })
}
export function delect_Goods(params) {
  return new a_service({
    url: '/api/delect_goods',
    method: 'post',
    params
  })
}
export function update_Goods(params) {
  return new a_service({
    url: '/api/update_goods',
    method: 'post',
    params
  })
}
