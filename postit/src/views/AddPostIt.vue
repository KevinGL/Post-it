<template>
    <NavBar />
    <div class="container">
        <form action="/home">
            <fieldset>
                <legend>New post-it</legend>
                
                <div class="form-group">
                    <label class="form-label mt-4">Title</label>
                    <input type="text" class="form-control" placeholder="Choose a title" v-model="title">
                </div>

                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Content</label>
                    <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Enter a content" v-model="content"></textarea>
                </div>

                <br>

                <legend>Background color  <button type="button" class="btn btn-info" v-on:click="resetColors()">Reset</button></legend>

                <label for="customRange1" class="form-label">Red level</label>
                <input type="range" class="form-range" id="customRange1" max="255" v-model="nivRed">

                <label for="customRange1" class="form-label">Green level</label>
                <input type="range" class="form-range" id="customRange1" max="255" v-model="nivGreen">

                <label for="customRange1" class="form-label">Blue level</label>
                <input type="range" class="form-range" id="customRange1" max="255" v-model="nivBlue">

                <button type="submit" class="btn btn-primary" v-on:click="submit()">Validate</button>
            </fieldset>
        </form>
        <PostitColor :red="nivRed" :green="nivGreen" :blue="nivBlue" />
    </div>
</template>

<script>
    import NavBar from '../components/navbar.vue'
    import PostitColor from '../components/postitColor.vue'
    
    export default
    {
        name: 'AddPostit',
        data: function(){
            return{
                title: "My new post-it !",
                content: "Don't forget to look at this post-it on your fridge !",
                nivRed: 128,
                nivGreen: 128,
                nivBlue: 128,
            }
        },
        methods: {
            submit()
            {
                //console.log(this.title);
                let array = JSON.parse(localStorage["postits"]);
                //let margin = 80 * array.length;

                array.push({
                    id: array.length,
                    title: this.title,
                    content: this.content,
                    color: "rgb(" + this.nivRed + ", " + this.nivGreen + ", " + this.nivBlue + ")",
                    margin: Math.floor(Math.random() * 800.0)
                });

                localStorage["postits"] = JSON.stringify(array);
            },

            resetColors()
            {
                this.nivRed = 128;
                this.nivGreen = 128;
                this.nivBlue = 128;
            }
        },
        components: {
                        PostitColor,
                        NavBar
                    }
    }
</script>

<style>
    @import 'https://bootswatch.com/5/cosmo/bootstrap.css';
</style>