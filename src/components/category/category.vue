<template>
<div class="category">
    <div v-for="(item,index) of List" id="content">
        <article class="post-152 post type-post status-publish format-standard hentry category-people category-photos">
            <div class="post-format-content">
                <div class="post-thumbnail"> <img width="480" height="640" :src="item.image" class="attachment-thumbnail wp-post-image" alt="105694702"></div>
                <div class="content-wrap">
                    <p class="entry-title"><a href="" class="featured-image" rel="bookmark">{{item.desc}}</a></p>
                </div>
            </div>
        </article>
    </div>
</div>
</template>

<script>
export default {
  name: "category",
    data(){
      return{
          List:[{
              image:'http://xlsb.luokangyuan.com/13.jpg',
              desc:'成功的道路上有许多未知的因素，需要我们去克服'
          },{
              image:'http://xlsb.luokangyuan.com/16.jpg',
              desc:'成功的道路上有许多未知的因素，需要我们去克服'
          },]
      }
    }
}

</script>

<style scoped>
.post-thumbnail img{
    width: 300px;
    height: 300px;
}
.category{
    height: 500px;
    width: 600px;
    background: #a8edea;
    margin-top: 90px;
}
#content article {
    float: left;
    margin-right: 4%;
    max-width: 236px;
    position: relative;
    width: 22%;
    margin-bottom: 3.5%;
}
#content article:nth-child(4n+4) {
    margin-right: 0;
}
.post-format-content {
    position: relative;
    background: #999;
}
.post-thumbnail {
    max-width: 100%;
    height: auto;
    overflow: hidden;
}
.content-wrap {
    padding: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 0;
    bottom: 0;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
}
.content-wrap p.entry-title {
    display: table;
    font-size: 8px;
    height: 100%;
    text-transform: uppercase;
    width: 100%;
    margin:0;
}
.edit-link {
    z-index: 2;
}
.featured-image {
    display: table-cell;
    position: relative;
    transition: opacity .25s ease-in-out, background .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out, background .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out, background .25s ease-in-out;
    vertical-align: middle;
    z-index: 1;
    color: #fff;
    text-decoration: none;
    opacity: 0;
    padding: 10%;
}
.featured-image:hover {
    opacity: 0.9;
    color: #fff;
    background: rgba(119,136,153,0.8);
}
.post-thumbnail img {
    display: block;
}
img {
    max-width: 100%;
    height: auto;
}

</style>
