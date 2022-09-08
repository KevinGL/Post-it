<template>
    <div id="addPostit">
        <a href="/add" class="postitLink">
            <h2>Add a postit<img src="../assets/plus.png" alt="plus" /></h2>
        </a>
    </div>
</template>

<script>
    export default
    {
        name: 'BtnAddPostit',
    }
</script>

<style>
    #addPostit
    {
        display: flex;
        margin-left: 60px;
        flex-direction: row;
    }

    #addPostit img
    {
        height: 30px;
        width: auto;
        margin-left: 15px;
        margin-bottom: 5px;
    }

    .postitLink
    {
        text-decoration: none;
        color: black;
    }
</style>