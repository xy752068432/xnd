<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import headerbar from './components/headerbar'
export default {
  name: 'app',
  components: {
    headerbar
  }
}
</script>

<style>
  @import "./common/mixin.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  .line-bottom{
    width: 100%;
    height: 0.093333rem;
    position: fixed;
    bottom: 1.493333rem;
  }
  .line-bottom img{
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
  .tab{
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 1.493333rem;
    line-height: 1.493333rem;
    position: fixed;
    bottom: 0;
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab-item.home a{
    background-image: url("./assets/home.png");
  }
  .tab-item.home a.router-link-exact-active{
    background-image: url("./assets/home-active.png");
  }
  .tab-item.cart a{
    background-image: url("./assets/cart.png");
  }
  .tab-item.cart a.router-link-exact-active{
    background-image: url("./assets/cart-active.png");
  }
  .tab-item.info a{
    background-image: url("./assets/info.png");
  }
  .tab-item.info a.router-link-exact-active{
    background-image: url("./assets/info-active.png");
  }
  .tab-item p{
    font-size: .24rem;
    font-family: "Microsoft YaHei UI";
    letter-spacing: 0;
    position: relative;
    top: 15px;
  }
  .tab-item a{
    display: block;
    color: #000;
    text-decoration: none;
    background-repeat: no-repeat;
    background-position: center 0.17333rem;
    background-size: .666667rem .666667rem;
  }
  .tab-item a.router-link-exact-active{
    color: #32ab42;
  }
</style>
