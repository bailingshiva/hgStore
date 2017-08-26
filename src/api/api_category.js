import a_service from '../a_service/a_service';
export function get_Category(params) {
  return new a_service({
    url: '/api/get_category',
    method: 'get',
    params
  })
}
export function add_Category(params) {
  return new a_service({
    url: '/api/insert_category',
    method: 'post',
    params
  })
}
export function delect_Category(params) {
  return new a_service({
    url: '/api/delect_category',
    method: 'post',
    params
  })
}
export function update_Category(params) {
  return new a_service({
    url: '/api/update_category',
    method: 'post',
    params
  })
}
