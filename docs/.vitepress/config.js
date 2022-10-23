module.exports = {
    base: '/zb-ep/',
    title: 'zb-ep文档',
    description: '基于Vue3+Element-plus封装',
    markdown: {
        lineNumbers: true,
        doc: {
            includeLevel: [1,2,3]
        }
    },
    themeConfig: {
        search: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/components/form/introduce' },
            { text: '文件示例', link: '/demo-doc/demo' },
        ],
        sidebar: {
            '/components/': [
                {
                    text: '表单组件',
                    items: [
                        { text: '介绍', link: '/components/form/introduce' },
                        { text: '动态form配置', link: '/components/form/normal' },
                        { text: '下拉选', link: '/components/form/select' },
                        { text: '单选', link: '/components/form/radio' },
                        { text: '树形控件', link: '/components/form/tree' },
                        { text: '标签', link: '/components/form/tag-input' },
                        { text: '富文本', link: '/components/form/editor' },
                        { text: '上传', link: '/components/form/upload' },
                    ]
                },
                {
                    text: '模块组件',
                    items: [
                        { text: '弹出框', link: '/components/module/dialog' },
                        { text: '搜索区域', link: '/components/module/filter' },
                        { text: '页面操作区域', link: '/components/module/control' },
                        { text: '表格', link: '/components/module/table' },
                        { text: 'table页面', link: '/components/module/page' },
                        { text: '树形-table', link: '/components/module/child-page' },
                    ]
                },
                {
                    text: '公共方法',
                    items: [
                        { text: '使用方式', link: '/components/method/introduce' },
                        { text: '日期格式化', link: '/components/method/dateformatter' },
                        { text: '选项赋值', link: '/components/method/setOptions' },
                        // { text: '动态数组赋值-object', link: '/components/method/setObjectValue' },
                        // { text: '动态数组赋值-key', link: '/components/method/setValueByKey' },
                        { text: '获取uuid', link: '/components/method/getUuid' },
                        { text: 'emoji判断', link: '/components/method/hasEmoji' },
                    ]
                },
            ],
            '/demo-doc/': [
                {
                    text: '文件示例',
                    items: [
                        { text: '表单配置文件', link: '/demo-doc/demo#option-js' },
                        { text: 'vue页面文件', link: '/demo-doc/demo#role-vue' },
                    ]
                },
            ],
        }
    }
  }