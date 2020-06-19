import React, { Component } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import $ from "jquery";

class SmoothScroll extends Component {

componentDidMount(){
  
    var cscrollbar = document.getElementsByClassName('c-scrollbar')[0];
    if (cscrollbar) {
      cscrollbar.remove();
    }

    this.ls = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      scrollFromAnywhere:true,
    });
    
      
      setTimeout(() => {
      if ($('.tl-wrapper--mount').has('#rl-scroll-container').length > 0) {
        this.ls.on("scroll", Scrollboi);

        let wh = window.innerHeight|| document.documentElement.clientHeight|| 
        document.body.clientHeight;
        let docHeight = $('.rl-main').height();
        let height = docHeight - wh;
        
        this.fs = function(){
          wh = window.innerHeight|| document.documentElement.clientHeight|| 
          document.body.clientHeight;
          docHeight = $('.rl-main').height();
          height = docHeight - wh;
        }
        window.addEventListener("resize", this.fs);
  
        function Scrollboi(obj) {
            
          let winScroll = obj["scroll"]["y"],
              scrolled = (winScroll / height) * 100,
              scrolledpx = ((scrolled * wh) / 100);
            
              if ($('.tl-wrapper--mount').has('#rl-scroll-container').length > 0) {
                document.getElementById("rl-scroll-block").style.height = wh - scrolledpx - 24 + "px";
            }
            
            if ($('.tl-wrapper--mount').has('#rl-scroll-container').length > 0) {
              document.getElementById("rl-scroll-image").style.height =  scrolledpx + "px";
            }

        }

    }
   }, 10,this.ls );
  
      } 

     componentWillUnmount() {
    var cscrollbar = document.getElementsByClassName('c-scrollbar')[0];
    if (cscrollbar) {
      cscrollbar.remove();
    }
    this.ls.destroy();
    this.ls.init();
    
}
  
  render() {
    window.addEventListener("resize",  this.ls);

    return (
      <></>
    )
  }
}

export default SmoothScroll;

      

