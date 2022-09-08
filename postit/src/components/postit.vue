<template>
    <div id="postit" :style="'background-color:' + color + ';margin-left: ' + margin + 'px;'">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <router-link :to="{ name: 'show', params: { idPostit: id }}">
            <img src="../assets/Arrow.png" alt="Voir ce post-it">
        </router-link>
    </div>
</template>

<script>
    export default
    {
        name: 'PostIt',
        props: ['id', 'title', 'content', 'color', 'margin']
    }
</script>

<style>
    img
    {
        width: 20px;
        height: auto;
        margin-left: 200px;
    }

    #postit
    {
      width: 300px;
      height: 200px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    #postit p
    {
      width: 250px;
      margin-left: auto;
      margin-right: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
</style>