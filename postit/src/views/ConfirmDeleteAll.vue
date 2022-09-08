<template>
    <div class="alert alert-dismissible alert-danger">
        Are you sure to want to delete ALL post-its ?<br>

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
        name: "ConfirmDeleteAll",
        methods: {
            delete()
            {
                localStorage["postits"] = JSON.stringify([]);
            }
        }
    }
</script>

<style>

</style>