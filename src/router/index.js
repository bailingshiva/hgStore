import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/details'
import list from '@/components/list'
import manage from '@/components/manage'
import goods from '@/components/backstage/goods'
import category from '@/components/backstage/category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/manage',
      component: manage,
      redirect:'/manage/goods',
      children: [
        {
          path: 'goods',
          component: goods
        },
        {
          path: 'category',
          component: category
        }
      ]
    },
    {
      path: '/list',
      component: list
    }
  ]
})
