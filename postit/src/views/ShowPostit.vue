<template>
    <NavBar />
    <div>
        <div v-for="p in postits" v-bind:key="p.title">
            <div v-if="p.id == $route.params.idPostit">
                <div id="postitEdit" :style="'background-color: rgb(' + this.rgb[0] + ', ' + this.rgb[1] + ', ' + this.rgb[2] + ');'">
                    <form action="/home">
                        <input type="text" v-model="this.title" :style="'background-color: rgb(' + this.rgb[0] + ', ' + this.rgb[1] + ', ' + this.rgb[2] + ');'" />
                        <br>
                        <input type="textarea" wrap="hard" v-model="this.content" :style="'background-color: rgb(' + this.rgb[0] + ', ' + this.rgb[1] + ', ' + this.rgb[2] + ');'" />
                        <br>
                        <div class="setColor">
                            Red level :
                            <input type="range" v-model="this.rgb[0]" max="255" />
                        </div>
                        <div class="setColor">
                            Green level : 
                            <input type="range" v-model="this.rgb[1]" max="255" />
                        </div>
                        <div class="setColor">
                            Blue level : 
                            <input type="range" v-model="this.rgb[2]" max="255" />
                        </div>
                        <button type="submit" v-on:click="submit()">Validate</button>
                    </form>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'delete', params: { idPostit: this.$route.params.idPostit }}">
            <button type="button" class="btn btn-danger">Delete post-it</button>
        </router-link>
    </div>
</template>

<script>
    import NavBar from '../components/navbar.vue'

    let array = JSON.parse(localStorage["postits"]);

    export default
    {
        name: "ShowPostit",
        //props: ['idPostit'],
        data: function(){
            return {
                postits: array,
                title: this.findPostItTitle(this.$route.params.idPostit, array),
                content: this.findPostItContent(this.$route.params.idPostit, array),
                rgb: this.findPostItColor(this.$route.params.idPostit, array),
            }
        },
        methods: {
            findPostItColor(id, array)
            {
                let rgb = [];

                array.forEach(elem =>
                {
                    if (elem.id == id)
                        rgb = elem.color.replace(/[^\d,]/g, '').split(',');
                });

                return(rgb);
            },

            findPostItTitle(id, array)
            {
                let title;
                
                array.forEach(elem =>
                {
                    if (elem.id == id)
                        title = elem.title;
                });

                return title;
            },

            findPostItContent(id, array)
            {
                let content;
                
                array.forEach(elem =>
                {
                    if (elem.id == id)
                        content = elem.content;
                });

                for(let i=0 ; i<content.length ; i++)
                {
                    if(content[i] == "\n")
                        content[i] = "&#10;";
                }

                return content;
            },

            submit()
            {
                //console.log(array);

                for(let i=0 ; i<array.length ; i++)
                {
                    //console.log(a.title);

                    if(this.$route.params.idPostit == array[i].id)
                    {
                        array[i].title = this.title;
                        array[i].content = this.content;
                        array[i].color = "rgb(" + this.rgb[0] + ", " + this.rgb[1] + ", " + this.rgb[2] + ")";
                    }
                }

                //console.log(array);

                localStorage["postits"] = JSON.stringify(array);
            }
         },
         components:
         {
            NavBar
         }
    }
</script>

<style>
    #postitEdit
    {
        width: 600px;
        height: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }

    #postitEdit input[type="text"]
    {
        margin-top: 20px;
        font-size: 1.5em;
        text-align: center;
    }

    #postitEdit input[type="textarea"]
    {
        margin-top: 20px;
        font-size: 1.5em;
        text-align: center;
        height: 150px;
    }

    .setColor
    {
        display: flex;
        flex-direction: column;
    }
</style>
