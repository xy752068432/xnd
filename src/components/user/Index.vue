<template lang='html'>
    <div>
        <p>
             <router-link to="/user/home">/user/home</router-link>
             <router-link :to="{name: 'UserInfo', query: {aa: 'query'}}" >/user/info</router-link>
        </p>
        <router-view :args="my_args"></router-view>
    </div>
</template>
<script>
    export default {
      name: 'UserHome',
      data: function () {
        return {
          my_args: '呵呵呵'
        }
      }
    }
</script>
