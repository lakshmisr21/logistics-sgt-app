<template>

      <div class="contentarea"> 
        <div class="camera">            
            <video ref="video" id="video" width="320" height="240" autoplay :class="(!captured) ? 'show' : 'hide'"></video>
            <div class="post-btns">
                <button @click="start" class="btn red">Start Camera</button>
                <button @click="capture" class="btn blue" id="snap" v-if="!captured">Capture</button>
                <button @click="cancel" class="btn red" v-if="captured">Cancle</button>
                <button @click="upload" class="btn green" v-if="captured">Upload</button>
            </div>
            <div :class="(captured) ? 'show' : 'hide'">
            <canvas ref="canvas" id="canvas" width="320" height="240"></canvas>
            <input type="text" v-model="desc" placeholder="Enter Description"/>
             </div>            
            <div class="output">
            <img :src="cap" alt="">
            </div>                
      </div>
    </div>  

<!--
 <main class="post">     
     <section class="stream">
         <button class="btn blue" @click="capture">Capture</button>   
         <video ref="video" id="video" width="320" height="240" autoplay v-if="!captured"></video>
         
     </section>
     <section class="capture">
         <canvas ref="canvas" id="canvas" width="320" height="240" :class="(captured) ? 'show' : 'hide'"></canvas>
     </section>
     <section class="image">
         <img src="cap" alt="">
     </section>
 </main>
-->

</template>

<script>
import axios from 'axios'
import vues from 'vuex'
export default {
    data (){
        return{
            video:{},
            canvas:{},
            constraints:{},
            cap:"",
            captured: false,
            desc:"",
            
        }
    },
   
    mounted() {
       /* this.video = this.$refs.video       

        if(this.$refs.canvas){
            this.canvas = this.$refs.canvas
            this.canvas.width = window.innerWidth
             this.canvas.height = window.innerWidth
        }

        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
               navigator.mediaDevices.getUserMedia({
                    video: this.constraints
            }).then(stream =>{
               this.video.srcObject = stream
               this.video.play()
            }).catch(err=>{
                console.log(err)
            })
        }*/
    },

    methods: {
        capture () {
            let context = this.canvas.getContext('2d').drawImage(this.video,0 ,0, 320, 240)
            //let context = this.canvas.getContext('2d').drawImage(this.video,0 ,0, this.canvas.width, this.canvas.height)
            this.cap = canvas.toDataURL('image/png') //Captured Image 
            this.captured = true
            //console.log(this.cap) //Captured Image 
        },
        cancel () {
            this.captured = false
        },
        start(){
             this.video = this.$refs.video       

        if(this.$refs.canvas){
            this.canvas = this.$refs.canvas
            this.canvas.width = window.innerWidth
             this.canvas.height = window.innerWidth
        }

        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
               navigator.mediaDevices.getUserMedia({
                    video: this.constraints
            }).then(stream =>{
               this.video.srcObject = stream
               this.video.play()
            }).catch(err=>{
                console.log(err)
            })
        }
                      
        },
        upload () {
            let api_url = this.$store.state.api_url
                axios.post(api_url + 'post/newpost', {
                auth_token: localStorage.getItem('jwt'),
                image: this.cap,
                desc: this.desc//,
                //display_name: this.$store.state
            })
            .then(response =>{
                console.log(response)
               this.captured = false
               // this.cap = ""
               // this.desc = ""
            })
        this.$router.go()
        }
    },
}
</script>

<style>
@import '../assets/scss/main.scss'

</style>