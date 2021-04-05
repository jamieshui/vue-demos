<template>
    <div>
        <router-link to="/a">go to A</router-link>
        <router-link to="/b">go to B</router-link>
        <router-view></router-view> <!-- 挂载childen嵌套路由必加router-view -->
    </div>
</template>