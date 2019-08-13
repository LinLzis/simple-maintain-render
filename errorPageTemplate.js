import cover from './404.png'
import './style.css'

export default {
  name: 'ErrorPageTemplate',
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
  },
  render() {
    const title = this.title.replace(/\n/g, '<br>')
    const message = this.message.replace(/\n/g, '<br>')
    return (
      <div class='wrapper'>
        <h1 class='title' domPropsInnerHTML={title}></h1>
        <div class='cover'>
          <img src={this.cover} alt='Error page cover image'/>
        </div>
        <h2 class='message' domPropsInnerHTML={message}></h2>
        {this.showBtn
          ? (
            <div class='actions'>
              <router-link to='/'>
                <button type='button' class='home-btn'>回到首页</button>
              </router-link>
            </div>
          ) : null}
      </div>
    )
  }
}

