<template>
  <footer class="footer">
    <p>©2022 Caffeine Factor Coffee, LLC. All Rights Reserved.</p>
    <ul>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Terms & Conditions</a></li>
        
        <li><img class="footer__social" src="https://img.favpng.com/8/15/12/belfast-youtube-logo-industry-png-favpng-FjjFZsdXvMVvi3NzvFBGebeF4.jpg" alt=""></li>
        <li><img class="footer__social" src="https://cdn-icons-png.flaticon.com/512/49/49351.png" alt=""></li>
    </ul>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">

ul {
    list-style: none;
    display: flex;
    margin-left: 5px;
}
li {
    margin-left: 30px;
}
a {
    color: black;
}
.footer {
    display: flex;
    width: 100%;
    font-family: 'RalewayLight';
    font-size: 1em;
    font-weight: 300;
    margin: 30px 45px;
    
    &__social {
        height: 30px;
    }
}
</style>