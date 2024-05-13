import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

export const CustomRoutes:AppRouteModule[] = [{
    path: '/member',
    name: 'member',
    component: LAYOUT,
    redirect: '/member/list',
    meta: {
      orderNo: 10,
      icon: 'ant-design:user-outlined',
      title: t('routes.member.member'),
    },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('/@/views/shishilian/member/list.vue'),
        meta: {
          title: t('routes.member.list'),
        },
      }
    ],
  }]

