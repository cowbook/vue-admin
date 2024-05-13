export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
  iconColor?:string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '会员',
    icon: 'dynamic-avatar-6|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '月',
  },
  {
    title: '访问',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '月',
  },
  {
    title: '收入',
    icon: 'ant-design:money-collect-filled',
    value: 8000,
    total: 120000,
    iconColor:'rgb(223,77,27)',
    color: 'orange',
    action: '月',
  },
  {
    title: '贴数',
    icon: 'total-sales|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: '月',
  },
];
