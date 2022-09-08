<template>
    <div :style="'background-color: rgb(' + red + ', ' + green + ', ' + blue + ');' + 'width: 100px;' + 'height: 100px;' + 'margin-left: auto;' + 'margin-right: auto;' + 'margin-top: 20px;' + 'margin-bottom: 20px;'">
        
    </div>
</template>

<script>
    export default
    {
        name: 'PostitColor',
        props: ['red', 'green', 'blue']
    }
</script>

<style>
    
</style>