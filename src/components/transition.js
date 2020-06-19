import React, { Component } from 'react'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import gsap from 'gsap'
import BezierEasing from 'bezier-easing'

class Transition extends Component{
 
  constructor(props) {
    super(props)
    this.verticalAnimation = this.verticalAnimation.bind(this)
    this.transitionCover = React.createRef()
  }
  
  verticalAnimation(exit, node) {
    var easing = BezierEasing(0.75, 0, 0.25, 1);
console.log(easing)
    return gsap.timeline()
      .set(this.transitionCover, { y: "100vh" })
      .to(this.transitionCover, {
        y: '0',
        ease: easing,
        duration: 0.6,
      })
      .set(node.querySelectorAll('.rl-main'), { opacity:0 })
      .set('body', { backgroundColor: this.props.background })

  }
  
  test(entry, node) {
    var easing = BezierEasing(0.8, 0, 0.2, 1);

    return gsap.timeline()
    .fromTo(node.querySelectorAll('.rl-main'), 0.6, {
      y: '100vh',
      ease: easing,
    }, {
      y: '0',
    })
    .to(this.transitionCover, {
      scaleY:0,
      transformOrigin:"top",
      ease: easing,
      duration: 0.6,
    },"-=0.6")

    
  }

  render(){
  return (
    <>
    <TransitionLink 
    to={this.props.to}  
    exit={{
      length: 1.2,
      trigger: ({ exit, node }) => this.verticalAnimation(exit, node), 
    }}
    entry={{
      delay: 0.6,
      trigger: ({ entry, node }) => this.test(entry, node),
    }}
  >
      {this.props.children}
    </TransitionLink>
         <TransitionPortal>
         <div className="rl-ts-cover" ref={n => (this.transitionCover = n)}
           style={{
             background: this.props.background,
             transform: 'translateY(100%)',
             zIndex:'-1'
           }}
         >
          <div style={{
            background:`linear-gradient(to bottom right, transparent calc(50% - 1px), ${this.props.color} calc(50% - 1px), ${this.props.color} 50%, transparent 50%)`,
            border: `1px solid ${this.props.color}`,
            opacity: 0.4
          }} className='block-light'></div>
          <div style={{
            background:`linear-gradient(to bottom right, transparent calc(50% - 1px), ${this.props.color} calc(50% - 1px), ${this.props.color} 50%, transparent 50%)`,
            border: `1px solid ${this.props.color}`,
            opacity: 0.4
          }} className='block-light'></div>
          <div style={{
            background:`linear-gradient(to bottom right, transparent calc(50% - 1px), ${this.props.color} calc(50% - 1px), ${this.props.color} 50%, transparent 50%)`,
            border: `1px solid ${this.props.color}`,
            opacity: 0.4
          }} className='block-light'></div>
    
         </div>
       </TransitionPortal>
       </>
  )
}
}


export default Transition

