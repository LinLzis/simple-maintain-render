import Template from './errorPageTemplate'

export const NotFoundPage = {
  name: 'NotFount',
  render() {
    const props = {
      title: '页面丢了...',
      message: '非常抱歉！您要找的页面被传送到了另一个空间。'
    }
    return <Template {...{ props }}/>
  }
}

export const ServiceUnavailablePage = {
  name: 'ServiceUnavailablePage',
  render() {
    const props = {
      title: '系统维护中...',
      message: '非常抱歉！系统正在维护，暂时无法显示该页面。'
    }
    return <Template {...{ props }}/>
  }
}

export const ComingSoonPage = {
  name: 'ComingSoonPage',
  render() {
    const props = {
      title: '敬请期待...',
      cover: require('@/assets/images/coming-soon.png'),
      showBtn: false,
      message: '功能正在努力开发中，敬请期待吧'
    }
    return <Template {...{ props }}/>
  }
}

export default {}
