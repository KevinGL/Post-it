<template>
    <div id="deletePostits">
        <a href="/deleteAll" class="postitLink">
            <h2>Delete all post-its</h2>
        </a>
    </div>
</template>

<script>
    export default
    {
        name: 'BtnDelAllPostits',
    }
</script>

<style>
    #deletePostits
    {
        display: flex;
        margin-left: 60px;
        flex-direction: row;
    }

    .postitLink
    {
        text-decoration: none;
        color: black;
    }
</style>