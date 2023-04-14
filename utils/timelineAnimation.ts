// import gsap from 'gsap'
// import { MeshLineGeometry } from '@react-three/drei'
export module test {}
// export const timelineAnimation = (ref: React.RefObject<MeshLineGeometry>) => {
//   if (!!ref.current) {
//     // Timeline
//     let timeline = gsap.timeline({ paused: false, delay: 2 })

//     // start timeline

//     timeline.to(
//       ref.current.position,
//       {
//         y: 11,
//         duration: 2
//       },
//       '>'
//     )

//     for (let i = 1; i < 100; i++) {
//       timeline.to(ref.current.position, { y: 11 - i * 0.08, z: 0 + i * 0.12, duration: 0.05 }, '>')
//     }

//     timeline.to(ref.current.position, { y: 0, z: 12, duration: 2 }, '>')

//     for (let i = 1; i < 100; i++) {
//       timeline.to(ref.current.position, { y: 0 - i * 0.1, z: 12 - i * 0.1, duration: 0.05 }, '>')
//     }

//     timeline.to(ref.current.position, { x: 0, y: -11, z: 0, duration: 2 }, '>')
//     timeline.to(ref.current.position, { x: 0, y: 0, z: 0, duration: 2 }, '>')

//     // Play
//     timeline.play()
//     timeline.repeat(Infinity)
//   }
// }
