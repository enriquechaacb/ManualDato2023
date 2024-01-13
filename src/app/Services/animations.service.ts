import { animation, trigger, animateChild, group, transition, animate, style, query, state, sequence, stagger, keyframes, useAnimation } from '@angular/animations';

export const fadeIn = animation([
    style({ opacity: 0 }), // start state
    animate('1000ms', style({ opacity: 1 }))
]);  
export const fadeOut = animation([
    animate('1000ms', style({ opacity: 0 }))
]);
export const slideIn = animation([
    style({ "margin-left": -1000, opacity: 0 }), // start state
    animate('500ms', style({ "margin-left": 0, opacity: 1 }))
]);  
export const slideOut = animation([
    animate('500ms', style({ "margin-left": -1000, opacity: 0 }))
]);

export const fadeAnimation = trigger('FadeInOut', [
    transition("void => *", [useAnimation(fadeIn, {params: { time: '1000ms' }} )]),
    transition("* => void", [useAnimation(fadeOut, {params: { time: '1000ms' }})]),
]);
export const slideAnimation = trigger('SlideInOut', [
    transition("void => *", [useAnimation(slideIn, {params: { time: '500ms' }} )]),
    transition("* => void", [useAnimation(slideOut, {params: { time: '500ms' }})]),
]);



export const pagesAnimation =
    trigger('changePage', [
        transition('* => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            query(':enter', style({ transform: 'translateY(30vh) rotateX(-90deg) scale(0.5)', opacity: 0 }), { optional: true }),
            query(':leave', style({ transform: 'translateY(0vh)' }), { optional: true }),
            sequence([
                query(':leave', animateChild(), { optional: true }),
                group([
                    query(':leave', [
                        animate('600ms cubic-bezier(.55,-0.57,.44,1)',
                            style({
                                transform: 'translateY(-30vh) rotateX(90deg)', opacity: 0
                            })
                        )
                    ], { optional: true }),
                    query(':enter', [
                        animate('600ms 600ms cubic-bezier(.7,.19,.51,1.49)',
                            style({
                                transform: 'translateY(0) rotateX(0deg)', opacity: 1
                            })
                        )
                    ], { optional: true })
                ]),
                query(':enter', animateChild(), { optional: true }),
            ])
        ])
    ]);

export const sectionsAnimation =
    trigger('changeSection', [
        transition(':enter', [
            style({
                opacity: 0,
                //position: 'absolute',
                //transform: 'translateX(-100px)'
            }),
            animate('700ms 700ms ease-in-out',
                style({
                    opacity: 1,
                    //transform: 'translateX(30px)'
                })
            )
        ]),
        transition(':leave', [
            animate('700ms ease-in-out',
                style({
                    opacity: 0,
                    //transform: 'translateX(100px)'
                })
            )
        ])
    ]);

// export const elemAnimation = 
//   trigger('flyInOut', [
//     transition(':enter', [
//       style({ opacity: 0, transform: 'rotateX(-90deg)', position: 'absolute', width:'100%' }),
//       animate('600ms 600ms ease-in-out',
//         style({ opacity: 1, transform: 'rotateX(0deg)' })
//       )
//     ]),
//     transition(':leave', [
//       animate('600ms ease-in-out',
//         style({ opacity: 0, transform: 'rotateX(-90deg)' })
//       )
//     ])
//   ]);

// export const rowAnimation =
//     trigger('fadeInOut', [
//         transition(':enter', [
//             style({ opacity: 0 }),
//             animate('1000ms ease-in-out',
//                 style({ opacity: 1 })
//             )
//         ]),
//         transition(':leave', [
//             animate('1000ms ease-in-out',
//                 style({ opacity: 0 })
//             )
//         ])
//     ]);

// export const menuAnimation =
//   trigger('flyInOut', [
//     transition(':enter', [
//       style({ opacity: 0, transform: 'translateY(-200px)' }),
//       animate('600ms 600ms cubic-bezier(.7,.19,.51,1.49)',
//         style({ opacity: 1, transform: 'translateY(0)' })
//       )
//     ]),
//     transition(':leave', [
//       animate('600ms cubic-bezier(.55,-0.57,.44,1)',
//         style({ opacity: 0, transform: 'translateY(-200px)' })
//       )
//     ])
//   ]);

// export const tableAnimation =
//   trigger('tableAnimation', [
//   transition(':enter', [
//     query('.mat-panel', style({ opacity: 0 }), { optional: true }),
//     query('.mat-panel', stagger(1000, [
//       style({ transform: 'translateY(100px)' }),
//       animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
//     ]), { optional: true }),
//   ]),
//   transition(':leave', [
//     query('.mat-panel', stagger(1000, [
//       style({ transform: 'translateY(0px)', opacity: 1 }),
//       animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(100px)', opacity: 0 })),
//     ]), { optional: true }),
//   ])
// ]);

// export const zoomAnimation = 
//   trigger('zoomInOut', [
//     transition(':enter', [
//       style({ opacity: 0, transform: 'scale(0)', position: 'absolute', width:'100%', left:0, top:'100%' }),
//       animate('600ms 600ms ease-in-out',
//         style({ opacity: 1, transform: 'scale(1)', top:0 })
//       )
//     ]),
//     transition(':leave', [
//       style({ opacity: 1, transform: 'scale(1)', top:0 }),
//       animate('600ms ease-in-out',
//         style({ opacity: 0, transform: 'scale(0)', position: 'absolute', width:'100%', left:0, top:'100%' })
//       )
//     ])
//   ]);

// export const flipYAnimation = 
//   trigger('flipInOut', [
//     transition(':enter', [
//       style({ 
//         opacity: 0,
//         transform: 'rotateY(-90deg)',
//         left: '50%',
//       }),
//       animate('600ms 600ms ease-in-out',
//         style({ 
//           opacity: 1,
//           transform: 'rotateY(0deg)' ,
//           left: '50%',
//         })
//       )
//     ]),
//     transition(':leave', [
//       animate('600ms ease-in-out',
//         style({ 
//           opacity: 0,
//           transform: 'rotateY(-90deg)',
//           left: '50%',
//         })
//       )
//     ])
//   ]);



// export const pagesAnimation =
//   trigger('slideInOut', [
//     transition('* => *', [
//       query(':enter,:leave',[ 
//         style({position:'absolute',left:0,width:'100%'}) 
//       ],{optional:true}),
//       group([
//         query(':enter', [
//           animate('2000ms cubic-bezier(.7,.19,.51,1.49)', keyframes([
//             style({opacity:0, transform:'scale(0.5) perspective(45em) rotateY(90deg) translateZ(-45em)', offset:0}),
//             style({transform:'scale(0.75) perspective(30em) rotateY(45deg) translateZ(-20em)', offset:0.5}),
//             style({opacity:1, transform:'scale(1)', offset:1})
//           ])) 
//         ],{optional:true}),
//         query(':leave', [
//           animate('2000ms ease-out', keyframes([
//             style({transform:'scale(1)', offset:0}),
//             style({transform:'scale(0.75) perspective(30em) rotateY(-45deg) translateZ(45em)', offset:0.5}),
//             style({opacity:0, transform:'scale(0.5) perspective(45em) rotateY(-90deg) translateZ(20em)', offset:1})
//           ])) 
//         ],{optional:true})
//       ])
//     ])
//   ]);

  // export const pagesAnimation =
  // trigger('slideInOut', [
  //   transition('* => *', [
  //     query(':enter,:leave',[ 
  //       style({position:'absolute',left:0,width:'100%' }) 
  //     ],{optional:true}),
  //     group([
  //       query(':enter', [
  //         animate('2000ms ease', keyframes([
  //           style({transform:'scale(0) translateX(100%)', offset:0}),
  //           style({transform:'scale(0.5) translateX(25%)', offset:0.3}),
  //           style({transform:'scale(1) translateX(0%)', offset:1})
  //         ])) 
  //       ],{optional:true}),
  //       query(':leave', [
  //         animate('2000ms ease', keyframes([
  //           style({transform:'scale(1)', offset:0}),
  //           style({transform:'scale(0.5) translateX(-25%)', offset:0.35}),
  //           style({opacity:0, transform:'scale(6) translateX(-50%) rotate(-180deg)', offset:1})
  //         ])) 
  //       ],{optional:true})
  //     ])
  //   ])
  // ]);

// export const pagesAnimation =
//   trigger('slideInOut', [
//     transition('* => *', translateTo({x:-100,y:-100,rotate:-720}))
//   ]);
//   function translateTo({x=100,y=0,rotate=0}){console.log('inicia anim')
//     const optional = {optional:true}
//     return[
//       query(':enter,:leave',[ style({position:'absolute',top:0,left:0,width:'100%' }) ], optional),
//       query(':enter',[ style({transform:`translate(${x}%, ${y}%) rotate(${rotate}deg)`}) ], optional),
//       group([
//         query(':leave',[ animate('600ms ease-out',style({transform:`translate(${x}%, ${y}%) rotate(${rotate}deg)`})) ], optional),
//         query(':enter',[ animate('600ms ease-out',style({transform:`translate(0,0) rotate(0)`})) ], optional)
//       ])
//     ]
//   }
