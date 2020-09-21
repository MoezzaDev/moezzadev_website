<template>
    <div>
        <!-- Page Header -->
        <header class="masthead" style="background-image: url('img/home-bg.jpg');">
            <div class="overlay" style="opacity:.2;"></div>
            <div class="header_image">
                <div class="header_art">
                    <img src="img/art.png" alt="">
                </div>
            </div>
            <div class="container">
            <div class="row" >
                <div class="col-lg-8 col-md-10 mx-auto" >
                <div class="site-heading" >
                    <h1 class="brand"><b>MoezzaDev</b></h1>
                    <span class="subheading" style="text-shadow: 0 0 0 #ffffff, 0 0 10px #000000;">Our Inspiration Will Change Your Life</span>
                </div>
                </div>
            </div>
            </div>
            
        </header>

        
    </div>
</template>

<script>
    export default {
        props:{
            app_name : String
        },
        name: 'Home'
    }
</script>

<style>
.brand{
    color:#42153e;
    text-shadow: 0 0 0 #ffffff, 0 0 15px #000000;
    -webkit-text-stroke: 2px white;
}
@media only screen and (min-width: 900px) {
  .header_image{
    position: relative;
    margin: 0px 5vw 0px 5vw;
  }
  .header_art{
    position: absolute;
    right: 1vw;
  }
  .header_art img{
    height: 600px;
  }
}
@media only screen and (max-width: 900px) {
  .header_image{
    position: relative;
  }
  .header_art{
    position: absolute;
    top:80px;
    left: 50%;
    transform: translate(-50%, -0%);
  }
  .header_art img{
    height: 350px;
  }
}
</style>