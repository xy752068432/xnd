<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo-right.png">
    </div>
    <div class="line-top"></div>
    <router-view></router-view>
    <div class="line-bottom">
      <img src="./assets/line-bottom.png">
    </div>
    <div class="tab">
      <div class="tab-item home">
        <router-link to='/'><p>首页</p></router-link>
      </div>
      <div class="tab-item cart">
        <router-link to='/cart'><p>购物车</p></router-link>
      </div>
      <div class="tab-item info">
        <router-link to='/info'><p>个人中心</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 36px;
    z-index: 100;
    background-color: #fff;
    background-image: url("./assets/logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 107.5px 27px;
  }
  .header img{
    float: right;
    height: 100%;
  }
  .line-top{
    position: fixed;
    top: 36px;
    width: 100%;
    height: 0.5px;
    background: url("./assets/line-top.png");
  }
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
    height: 3.5px;
    position: fixed;
    bottom: 56px;
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
    height: 56px;
    line-height: 56px;
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
    font-size: 9px;
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
    background-position: center 6.5px;
    background-size: 25px 25px;
  }
  .tab-item a.router-link-exact-active{
    color: #32ab42;
  }
</style>
