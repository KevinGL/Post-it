<template>
  <NavBar />
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div id="listPostits">
    <div v-for="postit in postits" v-bind:key="postit.title">
      <PostIt :id=postit.id :title=postit.title :color=postit.color :content=postit.content :margin=postit.margin />
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/navbar.vue'
  import PostIt from '../components/postit.vue'
  //import ref from 'vue'

  /*if(localStorage["postits"] == "")
  {
    localStorage["postits"] = 
    JSON.stringify([
      {
        id: 0,
        title: 'First post-it',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, tempora dolor. Incidunt illum eligendi neque dolore corrupti enim quia, odit quam? Accusamus doloribus nobis adipisci, ullam deserunt quis blanditiis voluptatem!',
        color: 'rgb(255,249,177)',
        margin: 20
      },

      {
        id: 1,
        title: 'Second post-it',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus molestias excepturi dolores id, illo cumque? Laborum temporibus neque obcaecati nostrum sed perspiciatis atque incidunt dolorum cupiditate. Cupiditate, enim non.',
        color: 'rgb(255,158,75)',
        margin: 30
      },

      {
        id: 2,
        title: 'Third post-it',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ab, architecto neque omnis velit vero assumenda quas fugit odio dolore voluptatibus mollitia, placeat soluta autem labore rerum non quisquam fugiat.',
        color: 'rgb(234,149,187)',
        margin: 10
      },
    ]);
  }*/

  export default
  {
    data: function()
          {
            //console.log(c);
            return{
                postits: JSON.parse(localStorage["postits"])
            }
          },
    
    methods:
    {
      //
    },

    name: 'HomeView',

    components:
    {
      NavBar,
      PostIt
    },
  }
</script>

<style>
    

    #app
    {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    #listPostits
    {
      display: flex;
      flex-direction: column;
      /*justify-content: space-around;*/
    }
</style>
