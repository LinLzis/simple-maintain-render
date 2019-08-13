# simple-maintain-render
Simple maintain page render by jsx in Vue 3.0+

通常项目中都会有404，500，401，敬请期待等系统维护页面，但是每个页面的内容都差不多也很简单，结构也差不多，如果每个都用一个vue文件去维护样式及内容代码显得很冗余，索性利用vue3.0+中可以用jsx的机会，练练手，简化代码。

这个维护界面的元素很简单，一个页面主标题，一个背景图片，一段描述文字，以及返回首页的按钮。

DEMO效果如下：

![image](https://github.com/LinLzis/simple-maintain-render/blob/master/sample.png)

## Guideline

> 新建一个维护页面的配置文件(jsx语法)，引入模板文件。Import template lib into js/jsx config. (index.js/index.jsx)
``` js
import Template from './errorPageTemplate'
```

> 在配置文件中传参定义页面的内容，目前只有4个参数，可以根据自己的需求改造。Define different maintenance page content. (index.js/index.jsx)
```  js
export const NotFoundPage = {
  name: 'NotFount',
  render() {
    const props = {
      title: '页面丢了...',
      message: '非常抱歉！您要找的页面被传送到了另一个空间。'，
      // 设置背景图片以及是否显示返回首页的按钮，默认为404.png以及显示按钮.
      // cover: require('@/assets/images/coming-soon.png'),
      // showBtn: false,
    }
    return <Template {...{ props }}/>
  }
}
```

> 在项目路由配置文件中引用index.js中的对应页面。
Define router of maintenance page path. (router.js)
```  js
{
    path: '/404',
    component: Layout,
    hidden: true,
    children: [{
      name: '404',
      path: '',
      component: () => import('./index').then(page => page.NotFoundPage),
    }]
  }
```

> 自定义参数和样式 Customized props & style (errorPageTemplate.js)

由于这只是个很简单的小东西，需要根据自己的需求去增减参数时修改lib的props就可以了。
``` js
... 省略其他vue代码
props: {
    title: {
      type: String,
      default: 'Oops!'
    },
    message: {
      type: String,
      default: 'Page Not Found'
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    cover: {
      type: String,
      default: cover
    }
  }
```

样式修改也只需修改lib中style.css就可以了
``` js
import './style.css'
```
