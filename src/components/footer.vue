<template>
  <footer >
    <div class="footer">
        <p>©2022 Caffeine Factor Coffee, LLC. All Rights Reserved.</p>
    <ul>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Terms & Conditions</a></li>
        
        <div class="footer__social">
            <li><img class="footer__social__icon" src="https://img.favpng.com/8/15/12/belfast-youtube-logo-industry-png-favpng-FjjFZsdXvMVvi3NzvFBGebeF4.jpg" alt=""></li>
            <li><img class="footer__social__icon" src="https://cdn-icons-png.flaticon.com/512/49/49351.png" alt=""></li>
        </div>
        </ul>
    </div>
    
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
    align-items: center;
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
    align-items: center;
    font-family: 'RalewayLight';
    font-size: 1em;
    margin: 30px 45px;
    
    &__social {
        display: flex;
        flex-direction: row;
        &__icon{
            height: 30px;
        }
    }
}

@media (max-width:600px) {

    .footer {
    font-size: 0.5em;
    margin: 30px -6px;
    flex-direction: column-reverse;
    align-items: center;
    
    &__social {
        &__icon{
            height: 10px;
        }

    }
}

}
</style>