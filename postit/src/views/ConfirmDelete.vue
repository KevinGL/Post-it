<template>
    <div class="alert alert-dismissible alert-danger">
        Are you sure to want to delete this post-it ?<br>

        <a href="/home" class="alert-link" style="margin-right: 10px">
            <button type="button" class="btn btn-danger" v-on:click="this.delete()">Yes</button>
        </a>

        <a href="/home" class="alert-link" style="margin-left: 10px">
            <button type="button" class="btn btn-info">No</button>
        </a>
    </div>
</template>

<script>
    export default
    {
        name: "ConfirmDelete",
        data: function(){
            return {
                idToDelete: this.$route.params.idPostit
            }
        },
        methods: {
            delete()
            {
                let array = JSON.parse(localStorage["postits"]);
                
                for(let i=0 ; i<array.length ; i++)
                {
                    if(array[i].id == this.idToDelete)
                    {
                        //console.log(array[i].title);

                        array.splice(i, 1);
                        break;
                    }
                }

                //console.log(array);
                localStorage["postits"] = JSON.stringify(array);
            }
        }
    }
</script>

<style>

</style>