<template>
    <ul class="buttons-container">
        <li><Button os="iOS" class="btn cyan"/></li>
        <li><Button os="Mac" class="btn"/></li>
      </ul>
</template>

<script>
import Button from "./Button.vue"
export default{
    name:"Buttons",
    components:{
        Button
    }
}
</script>

<style>

</style>