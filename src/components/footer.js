import React from "react"
import gsap from 'gsap'
import BezierEasing from 'bezier-easing'
import $ from "jquery";

class Footer extends React.Component{

  componentDidMount(){
    var easing = BezierEasing(0.75, 0, 0.25, 1);
    var length = 0.3;

    $( ".rl-footer-link-container" ).hover(
      function() {
        var hoverMask = $(this).find('.rl-hover-footer-link');
         var hoverMasked = $(this).find('.rl-footer-link');
        var hoverElement =  $(this).find('.hidden');
        var curWidth = hoverElement.width();
       
        gsap.timeline()
        .fromTo(hoverMasked, length,
          {
            scaleX:1,
        transformOrigin:"left",
    opacity:1,
    ease: easing,
  
  
  },{
          scaleX:0,
      transformOrigin:"left",
  opacity:0,


}
)
        .fromTo(hoverMask, length, {
        width:0,
        scaleX:0,
        opacity:0,
        transformOrigin:"left",
        ease: easing,

      }, {
           width:curWidth,
        scaleX:1,
        opacity:1,

      },`-=${length}`)
      
    
     
    
      }, function() {
        var hoverMask = $(this).find('.rl-hover-footer-link');
        var hoverMasked = $(this).find('.rl-footer-link');
    
           gsap.timeline()
        .to(hoverMask, length, {
        width:0,
        scaleX:0,
        opacity:0,
        transformOrigin:"left",
        ease: easing,

      })
           .to(hoverMasked, length,{
                scaleX:1,

            transformOrigin:"left",
            opacity:1,
            ease: easing,

      },`-=${length}`)
      }
    );
  }
  render(){
    return (
      <footer className="rl-footer">
          <div className="rl-right-text">
              <h1>Say</h1>
              <h1>Hello</h1>
          </div>
          <div className="rl-contact-links">
              <div className="rl-footer-link-container">
                <a href="mailto: Hello@ryanlevitan.com">
                  <div className="rl-hover-footer-link">
                    <div className="hidden">
                      <div className="rl-col-1-3 rl-arrow">
                        <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white"/>
                        </svg>
                      </div>
                      <h1>Message</h1>
                    </div>
                  </div>
                  <h1 className="rl-footer-link">Email</h1>
                </a>
              </div>
              <div className="rl-footer-link-container">
                <a href="https://www.linkedin.com/in/ryanlevitan">
                  <div className="rl-hover-footer-link">
                    <div className="hidden">
                      <div className="rl-col-1-3 rl-arrow">
                        <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white"/>
                        </svg>
                      </div>
                      <h1>Connect</h1>
                    </div>
                  </div>
                  <h1 className="rl-footer-link">LinkedIn</h1>
                </a>
              </div>
              <div className="rl-footer-link-container">
                <a href="https://dribbble.com/ryan-levitan/about">
                  <div className="rl-hover-footer-link">
                    <div className="hidden">
                      <div className="rl-col-1-3 rl-arrow">
                        <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white"/>
                        </svg>
                      </div>
                      <h1>Follow</h1>
                    </div>
                  </div>
                  <h1 className="rl-footer-link">Dribbble</h1>
                </a>
              </div>
          </div>
          <div className="copywright"><h2>©2020</h2></div>
    </footer>
    )
  }
}

export default Footer