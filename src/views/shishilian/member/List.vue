<template>
  
  <PageWrapper
    title="所有会员"
    content="如下是加入本社区所有的会员"
    contentFullHeight
    fixedHeight>

    <VxeBasicTable ref="tableRef" v-bind="gridOptions">
      <template #action="{ row }">
        <TableAction outside :actions="createActions(row)" />
      </template>
    </VxeBasicTable>


  </PageWrapper>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { ActionItem, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { vxeTableColumns, vxeTableFormSchema } from './tableData';
  import { BasicTableProps, VxeBasicTable, VxeGridInstance } from '/@/components/VxeTable';
  import { demoListApi } from '/@/api/demo/table';
  import { defHttp } from '/@/utils/http/axios';

  const { createMessage } = useMessage();

  const tableRef = ref<VxeGridInstance>();

  const gridOptions = reactive<BasicTableProps>({
    id: 'VxeTable',
    keepSource: true,
    editConfig: { trigger: 'click', mode: 'cell', showStatus: true },
    columns: vxeTableColumns,
    toolbarConfig: {
      buttons: [
        /*
        {
          content: '在第一行新增',
          buttonRender: {
            name: 'AButton',
            props: {
              type: 'primary',
              preIcon: 'mdi:page-next-outline',
            },
            events: {
              click: () => {
                tableRef.value?.insert({ name: '新增的' });
                createMessage.success('新增成功');
              },
            },
          },
        },
        {
          content: '在最后一行新增',
          buttonRender: {
            name: 'AButton',
            props: {
              type: 'warning',
            },
            events: {
              click: () => {
                tableRef.value?.insertAt({ name: '新增的' }, -1);
              },
            },
          },
        },*/
      ],
    },
    formConfig: {
      enabled: true,
      items: vxeTableFormSchema,
    },
    height: 'auto',
    proxyConfig: {
      ajax: {
        query: async ({ page, form }) => {

          return await defHttp.get({
            url: '/member_list',
            params:{
              pageNum: page.currentPage,
              pageSize: page.pageSize,
              ...form,
            }},
            
            {
              // @ts-ignore
              ignoreCancelToken: true,
            }
          )

        },
        queryAll: async ({ form }) => {
          return await demoListApi(form);
        },
      },
    },
  });

  // 操作按钮（权限控制）
  const createActions = (record) => {
    const actions: ActionItem[] = [
      {
        label: '详情',
        onClick: () => {
          console.log(record);
        },
      },
      {
        label: '编辑',
        onClick: () => {},
      },
      {
        label: '删除',
        color: 'error',
        popConfirm: {
          title: '是否确认删除',
          confirm: () => {
            tableRef.value?.remove(record);
          },
        },
      },
    ];

    return actions;
  };
</script>
