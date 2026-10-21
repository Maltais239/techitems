
(function(){
'use strict';

const CATALOG=[
  {
    "name": "Beebot",
    "img": "https://maltais239.github.io/techitems/Beebot.webp",
    "setSize": 9
  },
  {
    "name": "Button Maker",
    "img": "https://maltais239.github.io/techitems/button-making-kit-large-lg.jpg",
    "setSize": 1
  },
  {
    "name": "Chrome Tablets — Cart A",
    "img": "https://maltais239.github.io/techitems/Chrome%20Tablets.jpg",
    "setSize": 20
  },
  {
    "name": "Chrome Tablets — Cart B",
    "img": "https://maltais239.github.io/techitems/Chrome%20Tablets.jpg",
    "setSize": 20
  },
  {
    "name": "Chrome Tablets — Cart C",
    "img": "https://maltais239.github.io/techitems/Chrome%20Tablets.jpg",
    "setSize": 20
  },
  {
    "name": "Chrome Tablets — Cart D",
    "img": "https://maltais239.github.io/techitems/Chrome%20Tablets.jpg",
    "setSize": 20
  },
  {
    "name": "Class VR",
    "img": "https://maltais239.github.io/techitems/Class%20VR.png",
    "setSize": 16
  },
  {
    "name": "Code and Go Robot Mice",
    "img": "https://maltais239.github.io/techitems/code-and-go-robot-mouse-activity-set-219-2831.webp",
    "setSize": 12
  },
  {
    "name": "CoDrone",
    "img": "https://maltais239.github.io/techitems/CoDrone%20EDU.jpg",
    "setSize": 13
  },
  {
    "name": "Finch Bot",
    "img": "https://maltais239.github.io/techitems/Finch.webp",
    "setSize": 10
  },
  {
    "name": "Forward EDU Climate Action Kits",
    "img": "https://maltais239.github.io/techitems/Forward%20EDU%20Climate%20Action%20Kits.webp",
    "setSize": 15
  },
  {
    "name": "Forward EDU Solar kits",
    "img": "https://maltais239.github.io/techitems/Forward%20EDU%20Solar%20Kits.jpg",
    "setSize": 18
  },
  {
    "name": "Headsets Logitech White",
    "img": "https://maltais239.github.io/techitems/Logitech%20Headset%20White.jpg",
    "setSize": 25
  },
  {
    "name": "Headsets Logitech Black",
    "img": "https://maltais239.github.io/techitems/Logitech%20Headset%20Black.jpg",
    "setSize": 25
  },
  {
    "name": "Headsets Microsoft LifeChat LX-3000 USB",
    "img": "https://maltais239.github.io/techitems/Headset%20Microsoft.jpg",
    "setSize": 25
  },
  {
    "name": "Makey Makey",
    "img": "https://maltais239.github.io/techitems/Makey%20Makey.jpg",
    "setSize": 12
  },
  {
    "name": "Micro:bit Version 1",
    "img": "https://maltais239.github.io/techitems/Microbit%20version%201.jpg",
    "setSize": 30
  },
  {
    "name": "Micro:bit Version 2",
    "img": "https://maltais239.github.io/techitems/micro_bit_V2.webp",
    "setSize": 30
  },
  {
    "name": "ProBot",
    "img": "https://maltais239.github.io/techitems/Probot.jpg",
    "setSize": 10
  },
  {
    "name": "Talebot",
    "img": "https://maltais239.github.io/techitems/Talebot%20kits.webp",
    "setSize": 12
  },
  {
    "name": "Vincibot",
    "img": "https://maltais239.github.io/techitems/vincibot.webp",
    "setSize": 12
  },
  {
    "name": "Chrome Tablets in Tech Tubs",
    "img": "https://maltais239.github.io/techitems/Chrome%20Tablet%20Tubs.png",
    "setSize": 12
  },
  {
    "name": "3D Scanner and Laptop",
    "img": "https://maltais239.github.io/techitems/3D%20Scanner.png",
    "setSize": 1
  },
  {
    "name": "Bambu Lab X1 Carbon 3D Printer",
    "img": "https://maltais239.github.io/techitems/Bambux1.jpg",
    "setSize": 1
  }
];
const TOOLS={
  "Beebot": {
    "grades": [
      0,
      2
    ],
    "description": "A friendly floor robot for learning directions, sequences, and debugging.",
    "ideas": [
      "Plan a route across a story or number mat.",
      "Predict, test, and fix a sequence of directions."
    ],
    "setup": "Screen-free; use floor space or a grid mat.",
    "lessons": [
      2
    ],
    "why": "A strong starting point for short instructions, movement, and early problem solving. Your slides include Grade 1 and 2 connections.",
    "mode": "Screen-free"
  },
  "Button Maker": {
    "grades": [
      0,
      12
    ],
    "description": "Turn student artwork and messages into wearable buttons.",
    "ideas": [
      "Create identity, reading, or school-community buttons.",
      "Design a message for an audience using paper or digital artwork."
    ],
    "setup": "Prepare printed artwork and button parts. An adult operates or closely supervises the press and circle cutter.",
    "lessons": [
      14
    ],
    "why": "Students of any grade can design the artwork; younger students need adult help with assembly.",
    "mode": "Maker project"
  },
  "Class VR": {
    "grades": [
      4,
      12
    ],
    "description": "Explore immersive scenes, virtual field trips, and interactive models.",
    "ideas": [
      "Use an immersive scene as a writing prompt.",
      "Compare a virtual environment with images, maps, or a real place."
    ],
    "setup": "Charge the headsets, choose content in the teacher portal, and plan a short, seated session.",
    "lessons": [
      9
    ],
    "why": "A preliminary starting range for independent discussion and reflection. Follow the headset guidance and adapt participation for individual learners.",
    "mode": "Teacher-led"
  },
  "Code and Go Robot Mice": {
    "grades": [
      0,
      3
    ],
    "description": "Build a maze, plan a path, and program a mouse to reach its goal.",
    "ideas": [
      "Design a maze and write the directions before testing.",
      "Compare two routes and explain which uses fewer steps."
    ],
    "setup": "Screen-free; gather maze pieces and direction cards.",
    "lessons": [
      1
    ],
    "why": "Concrete paths and simple commands suit early sequencing and spatial reasoning. Your lesson connects to Grade 1 movement.",
    "mode": "Screen-free"
  },
  "CoDrone": {
    "grades": [
      6,
      12
    ],
    "description": "Use flight challenges to connect coding, measurement, and problem solving.",
    "ideas": [
      "Code a precise takeoff, path, and landing.",
      "Test how changing one movement value changes the flight."
    ],
    "setup": "Charge batteries, prepare a clear flight zone, and teach the safety and cooling routines in your slides.",
    "lessons": [
      8
    ],
    "why": "Flight management and precise coding work well with older students and structured supervision.",
    "mode": "Coding + flight"
  },
  "Finch Bot": {
    "grades": [
      2,
      9
    ],
    "description": "A programmable robot that brings movement, lights, sound, and sensors into learning.",
    "ideas": [
      "Draw shapes and connect turns to angles.",
      "Create a robot response to light or an obstacle."
    ],
    "setup": "Charge the robots and prepare compatible devices and a coding environment.",
    "lessons": [
      3
    ],
    "why": "Start with supported block coding in younger grades; extend to sensors, angles, and more complex programs as students progress.",
    "mode": "Device needed"
  },
  "Forward EDU Climate Action Kits": {
    "grades": [
      4,
      9
    ],
    "description": "Build and code working models connected to environmental challenges.",
    "ideas": [
      "Build and test an automatic watering system.",
      "Explore a wind turbine, vehicle, or other model from the lesson library."
    ],
    "setup": "Allow time for building. Prepare micro:bits, devices, parts, and the Forward Education lesson instructions.",
    "lessons": [
      13
    ],
    "why": "Multi-step construction and input/output coding suit upper elementary and junior high, with scaffolding as needed.",
    "mode": "Build + code"
  },
  "Forward EDU Solar kits": {
    "grades": [
      6,
      8
    ],
    "description": "Build a solar-energy system and investigate how a panel can follow the sun.",
    "ideas": [
      "Build and code a sun-tracking panel.",
      "Change one design choice, test it, and explain the result."
    ],
    "setup": "Plan a longer build session; complete the introductory micro:bit lesson before coding.",
    "lessons": [
      12,
      4
    ],
    "why": "Your sun-tracking lesson explicitly recommends Grades 6–8 and approximately 90–120 minutes.",
    "mode": "Build + code"
  },
  "Makey Makey": {
    "grades": [
      2,
      9
    ],
    "description": "Turn conductive everyday materials into controls for a computer project.",
    "ideas": [
      "Create a playable instrument.",
      "Design a custom controller and test which materials complete a circuit."
    ],
    "setup": "Use a computer, USB connection, alligator clips, and conductive materials.",
    "lessons": [
      25
    ],
    "why": "Simple controller projects can be supported in younger grades; older students can connect circuits, coding, and design.",
    "mode": "Device needed"
  },
  "Micro:bit Version 1": {
    "grades": [
      3,
      9
    ],
    "description": "A small programmable computer with an LED display, buttons, and sensors.",
    "ideas": [
      "Create a light display or button-controlled animation.",
      "Investigate light readings and code a response."
    ],
    "setup": "Use a compatible computer, USB cable, and MakeCode. V1 needs extra hardware for projects requiring a built-in speaker or microphone.",
    "lessons": [
      4,
      5,
      7
    ],
    "why": "Block coding supports a wide range of learners. Introduce inputs and outputs before longer projects. V2 sound lessons are not directly interchangeable.",
    "mode": "Device needed"
  },
  "Micro:bit Version 2": {
    "grades": [
      2,
      9
    ],
    "description": "Explore coding with lights, buttons, sensors, a microphone, and a speaker.",
    "ideas": [
      "Create an interactive pet.",
      "Investigate light or sound and code a response."
    ],
    "setup": "Use compatible devices, USB cables, and MakeCode. Try a short introductory activity first.",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "why": "A useful starting range for independent block coding, with supported Grade 2 sound activities available in your slides.",
    "mode": "Device needed"
  },
  "ProBot": {
    "grades": [
      3,
      6
    ],
    "description": "Program a drawing robot using distances, angles, and repeated instructions.",
    "ideas": [
      "Draw polygons and explain the turns.",
      "Compare efficient routes or designs with the same area."
    ],
    "setup": "Prepare a smooth floor or large paper, pens, and space to test routes.",
    "lessons": [
      24
    ],
    "why": "Distances, angles, shapes, and procedures make a strong fit for elementary mathematics and coding.",
    "mode": "Screen-free"
  },
  "Talebot": {
    "grades": [
      0,
      2
    ],
    "description": "Learn directions and sequences with a hands-on, screen-free robot.",
    "ideas": [
      "Follow two- or three-step movement instructions.",
      "Create a route, predict the outcome, and fix an error."
    ],
    "setup": "Charge the robots and prepare activity mats or a clear workspace.",
    "lessons": [
      0
    ],
    "why": "A good introduction to ordered instructions and movement. Your teacher slides connect directly to Grade 1 science.",
    "mode": "Screen-free"
  },
  "Vincibot": {
    "grades": [
      3,
      9
    ],
    "description": "Code a robot to draw, follow lines, and respond to light or sound.",
    "ideas": [
      "Draw geometric art using code.",
      "Investigate a sensor and create an alarm or line-following program."
    ],
    "setup": "Charge the robots, prepare compatible devices, and gather paper or a line-following surface.",
    "lessons": [
      10,
      11
    ],
    "why": "Start with movement and drawing, then extend to sensors and more involved programs.",
    "mode": "Device needed"
  },
  "3D Scanner and Laptop": {
    "grades": [
      5,
      12
    ],
    "description": "Capture a physical object as a digital 3D model.",
    "ideas": [
      "Compare a scan with the original object.",
      "Investigate which surfaces or shapes are easier to capture."
    ],
    "setup": "Use the included laptop and scanner software. Begin with a small, stationary object and guided setup.",
    "lessons": [],
    "why": "Scanning, file handling, and model cleanup suit older learners with teacher support.",
    "mode": "Digital design"
  },
  "Bambu Lab X1 Carbon 3D Printer": {
    "grades": [
      4,
      12
    ],
    "description": "Bring student-designed 3D models into the physical world.",
    "ideas": [
      "Design a small prototype that solves a classroom problem.",
      "Measure a printed model and improve the design."
    ],
    "setup": "Plan a teacher-managed workflow for file preparation, printing, and finished-model collection.",
    "lessons": [],
    "why": "Students can design at different levels; printer operation and material handling remain adult-managed.",
    "mode": "Maker project"
  },
  "Chrome Tablets — Cart A": {
    "grades": [
      0,
      12
    ],
    "description": "A shared set of Chrome tablets for creating, coding, and exploring.",
    "ideas": [
      "Create a digital story or record an explanation.",
      "Use age-appropriate coding lessons or interactive learning activities."
    ],
    "setup": "Charge devices and check access to the apps or websites for your lesson.",
    "lessons": [
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "why": "The selected activity determines the grade fit. ScratchJr offers an early-years starting point; Scratch and MakeCode Arcade extend the challenge.",
    "mode": "Classroom devices"
  },
  "Chrome Tablets — Cart B": {
    "grades": [
      0,
      12
    ],
    "description": "A shared set of Chrome tablets for creating, coding, and exploring.",
    "ideas": [
      "Create a digital story or record an explanation.",
      "Use age-appropriate coding lessons or interactive learning activities."
    ],
    "setup": "Charge devices and check access to the apps or websites for your lesson.",
    "lessons": [
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "why": "The selected activity determines the grade fit. ScratchJr offers an early-years starting point; Scratch and MakeCode Arcade extend the challenge.",
    "mode": "Classroom devices"
  },
  "Chrome Tablets — Cart C": {
    "grades": [
      0,
      12
    ],
    "description": "A shared set of Chrome tablets for creating, coding, and exploring.",
    "ideas": [
      "Create a digital story or record an explanation.",
      "Use age-appropriate coding lessons or interactive learning activities."
    ],
    "setup": "Charge devices and check access to the apps or websites for your lesson.",
    "lessons": [
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "why": "The selected activity determines the grade fit. ScratchJr offers an early-years starting point; Scratch and MakeCode Arcade extend the challenge.",
    "mode": "Classroom devices"
  },
  "Chrome Tablets — Cart D": {
    "grades": [
      0,
      12
    ],
    "description": "A shared set of Chrome tablets for creating, coding, and exploring.",
    "ideas": [
      "Create a digital story or record an explanation.",
      "Use age-appropriate coding lessons or interactive learning activities."
    ],
    "setup": "Charge devices and check access to the apps or websites for your lesson.",
    "lessons": [
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "why": "The selected activity determines the grade fit. ScratchJr offers an early-years starting point; Scratch and MakeCode Arcade extend the challenge.",
    "mode": "Classroom devices"
  },
  "Headsets Logitech White": {
    "grades": [
      0,
      12
    ],
    "description": "Headphones with a microphone for listening, recording, and accessible learning.",
    "ideas": [
      "Record reading, narration, or a spoken explanation.",
      "Support listening activities and speech-to-text tasks."
    ],
    "setup": "Check connector compatibility with your classroom devices before the lesson.",
    "lessons": [],
    "why": "Useful across grades; fit and microphone setup may need adult support.",
    "mode": "Audio + voice"
  },
  "Headsets Logitech Black": {
    "grades": [
      0,
      12
    ],
    "description": "Headphones with a microphone for listening, recording, and accessible learning.",
    "ideas": [
      "Record reading, narration, or a spoken explanation.",
      "Support listening activities and speech-to-text tasks."
    ],
    "setup": "Check connector compatibility with your classroom devices before the lesson.",
    "lessons": [],
    "why": "Useful across grades; fit and microphone setup may need adult support.",
    "mode": "Audio + voice"
  },
  "Headsets Microsoft LifeChat LX-3000 USB": {
    "grades": [
      0,
      12
    ],
    "description": "Headphones with a microphone for listening, recording, and accessible learning.",
    "ideas": [
      "Record reading, narration, or a spoken explanation.",
      "Support listening activities and speech-to-text tasks."
    ],
    "setup": "Check connector compatibility with your classroom devices before the lesson.",
    "lessons": [],
    "why": "Useful across grades; fit and microphone setup may need adult support.",
    "mode": "Audio + voice"
  },
  "Chrome Tablets in Tech Tubs": {
    "grades": [
      0,
      12
    ],
    "description": "A shared set of Chrome tablets for creating, coding, and exploring.",
    "ideas": [
      "Create a digital story or record an explanation.",
      "Use age-appropriate coding lessons or interactive learning activities."
    ],
    "setup": "Charge devices and check access to the apps or websites for your lesson.",
    "lessons": [
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "why": "The selected activity determines the grade fit. ScratchJr offers an early-years starting point; Scratch and MakeCode Arcade extend the challenge.",
    "mode": "Classroom devices"
  }
};
const LESSONS=[
  {
    "title": "Talebot New Teacher Slides",
    "url": "https://docs.google.com/presentation/d/1lVaFJwy20nYg_MIYHywOt1GKy1M6mUwts8WKcB9NSbE/preview"
  },
  {
    "title": "Code & Go Robot Mice Slides",
    "url": "https://docs.google.com/presentation/d/1a7BcvWt-GjL03JcR-KadoySI0a58fFgbObD9krhgGug/preview"
  },
  {
    "title": "Beebot Slides New",
    "url": "https://docs.google.com/presentation/d/10THvBsMgGrzD5exzMQ2SGxTkPKOOQAOfM6VoGkasShw/preview"
  },
  {
    "title": "Finchbot New Slides",
    "url": "https://docs.google.com/presentation/d/1tTZjrMiIgXrpXqi8wJDijSMDum_kxYR_yK6CgjApav4/preview"
  },
  {
    "title": "Micro:bit Intro Lesson",
    "url": "https://docs.google.com/presentation/d/1x6sWL5IuSCrtHwcB3NwYCo1rhRl4MZM5cvgWuGLhBwY/preview"
  },
  {
    "title": "Micro:bit Light Lesson",
    "url": "https://docs.google.com/presentation/d/18WZRm4nksXrBQQ5zXb_hzqifETMcvkUTx68BrnQ6bXg/preview"
  },
  {
    "title": "Grade 2 Sound Micro:bit",
    "url": "https://docs.google.com/presentation/d/1ta6NxSnak52BaCarNOfYznfAOd8x02WyOL4Wcv2EwV8/preview"
  },
  {
    "title": "Micro:bit Virtual Pet 🐱 🤖",
    "url": "https://docs.google.com/presentation/d/12Y3pEQudgKdJgZwJ2Nmhn0DcDflvdaGceiAWQJkcC08/preview"
  },
  {
    "title": "CoDrone",
    "url": "https://docs.google.com/presentation/d/1izf6x4cCZ209-4obm6jN0Tc_EsrHVbc4J2lPYBoKo8U/preview"
  },
  {
    "title": "Class VR",
    "url": "https://docs.google.com/presentation/d/1EyNmgAaZtFORXB89tv70RBWLy8wFFBWuuooWazECNsc/preview"
  },
  {
    "title": "Vincibots NEW",
    "url": "https://docs.google.com/presentation/d/1DfT4NS3mQqGSIWZQ1zwdWwhzDTaEPJBTI3r8IgXSsl8/preview"
  },
  {
    "title": "Vincibots Lesson 2 Art and Coding",
    "url": "https://docs.google.com/presentation/d/1LPJql4UtxyXNNo2r4fCjeEhPGWXkhpkeZ03ZWNjcZ_E/preview"
  },
  {
    "title": "Solar Panel Forward EDU",
    "url": "https://docs.google.com/presentation/d/11jSydAx57ZRSQWDoQC-nyoEeJ2mX3pTgtisgBZkikZo/preview"
  },
  {
    "title": "Climate action",
    "url": "https://docs.google.com/presentation/d/1_YicgwMq6XYWDnDKa66_JGMYlT0ZHyhkkvnK7j4xSfo/preview"
  },
  {
    "title": "Button Maker",
    "url": "https://docs.google.com/presentation/d/1s8drgz6TByr5UIR-Tr5F4euOmpnUmmxOw5ODwhBEXTo/preview"
  },
  {
    "title": "Underwater Animal Pathways Adventure Scratch Jr.",
    "url": "https://docs.google.com/presentation/d/1GtndW4PLyi0ezZMhVN86WqvVOh0f3nCxiE2_MRjAV0A/preview"
  },
  {
    "title": "Coding the Seasons Scratch Jr.",
    "url": "https://docs.google.com/presentation/d/1J_YpJ805BPZHyRe0hucDwmhPzAsaDdryFbPf6IbcBb0/preview"
  },
  {
    "title": "Maltais Scratch Jr. Holiday Christmas Project Teacher Slides",
    "url": "https://docs.google.com/presentation/d/18ia8o5URoXRQZYZmciLHufPY8bC-vlUM8phSyT--wmU/preview"
  },
  {
    "title": "Scratch Jr Coding Grade 3",
    "url": "https://docs.google.com/presentation/d/1Zn6VuGUhkhSw3-mEm1008hj91w5o-Es6pL4pTSkY4ws/preview"
  },
  {
    "title": "Scratch Aquarium",
    "url": "https://docs.google.com/presentation/d/14PYrd80GGfQFg-yvS3z1J5txv7TK1MoNnfBgL6izG40/preview"
  },
  {
    "title": "Grade 6 Coding Shapes in Scratch-abstraction",
    "url": "https://docs.google.com/presentation/d/1zBILqh6TXH9LhXkJNOlRMyW9oRlux_vWitGhpVKC7Mg/preview"
  },
  {
    "title": "Scratch Halloween Game",
    "url": "https://docs.google.com/presentation/d/1r9ZUs_aqWZ1PZckshXN2BEqmR_TnsV36kTqvp55ggDY/preview"
  },
  {
    "title": "Make Code Arcade",
    "url": "https://docs.google.com/presentation/d/1R-Id4AoQQAQLjcZvUBUKxY_RxzxKQX_QlkkPt2YUOYk/preview"
  },
  {
    "title": "Computer Science Week Lessons",
    "url": "https://docs.google.com/presentation/d/1JwVQ7jsC6CmQd8xpntSHFHNfYaWlaSnbfHW1R-GnBFI/preview"
  },
  {
    "title": "ProBot Driver Training",
    "url": "https://docs.google.com/presentation/d/1V4eX3eFs9qm_WSRMRYazDaXQVm-LYniGu-ihwGVFteM/preview"
  },
  {
    "title": "Makey Makey — earlier resource",
    "url": "https://docs.google.com/presentation/d/1Qsa4kTBAhy3JF_AzvJqaBh8D202ZOZMlShhSNNH6zgM/preview"
  }
];
const PHOTOS={
  "https://maltais239.github.io/techitems/Beebot.webp": "https://maltais239.github.io/techitems/optimized-v1/0.webp",
  "https://maltais239.github.io/techitems/button-making-kit-large-lg.jpg": "https://maltais239.github.io/techitems/optimized-v1/1.webp",
  "https://maltais239.github.io/techitems/Chrome%20Tablets.jpg": "https://maltais239.github.io/techitems/optimized-v1/2.webp",
  "https://maltais239.github.io/techitems/Class%20VR.png": "https://maltais239.github.io/techitems/optimized-v1/3.webp",
  "https://maltais239.github.io/techitems/code-and-go-robot-mouse-activity-set-219-2831.webp": "https://maltais239.github.io/techitems/optimized-v1/4.webp",
  "https://maltais239.github.io/techitems/CoDrone%20EDU.jpg": "https://maltais239.github.io/techitems/optimized-v1/5.webp",
  "https://maltais239.github.io/techitems/Finch.webp": "https://maltais239.github.io/techitems/optimized-v1/6.webp",
  "https://maltais239.github.io/techitems/Forward%20EDU%20Climate%20Action%20Kits.webp": "https://maltais239.github.io/techitems/optimized-v1/7.webp",
  "https://maltais239.github.io/techitems/Forward%20EDU%20Solar%20Kits.jpg": "https://maltais239.github.io/techitems/optimized-v1/8.webp",
  "https://maltais239.github.io/techitems/Logitech%20Headset%20White.jpg": "https://maltais239.github.io/techitems/optimized-v1/9.webp",
  "https://maltais239.github.io/techitems/Logitech%20Headset%20Black.jpg": "https://maltais239.github.io/techitems/optimized-v1/10.webp",
  "https://maltais239.github.io/techitems/Headset%20Microsoft.jpg": "https://maltais239.github.io/techitems/optimized-v1/11.webp",
  "https://maltais239.github.io/techitems/Makey%20Makey.jpg": "https://maltais239.github.io/techitems/optimized-v1/12.webp",
  "https://maltais239.github.io/techitems/Microbit%20version%201.jpg": "https://maltais239.github.io/techitems/optimized-v1/13.webp",
  "https://maltais239.github.io/techitems/micro_bit_V2.webp": "https://maltais239.github.io/techitems/micro_bit_V2.webp",
  "https://maltais239.github.io/techitems/Probot.jpg": "https://maltais239.github.io/techitems/optimized-v1/15.webp",
  "https://maltais239.github.io/techitems/Talebot%20kits.webp": "https://maltais239.github.io/techitems/optimized-v1/16.webp",
  "https://maltais239.github.io/techitems/vincibot.webp": "https://maltais239.github.io/techitems/optimized-v1/17.webp",
  "https://maltais239.github.io/techitems/Chrome%20Tablet%20Tubs.png": "https://maltais239.github.io/techitems/optimized-v1/18.webp",
  "https://maltais239.github.io/techitems/3D%20Scanner.png": "https://maltais239.github.io/techitems/optimized-v1/19.webp",
  "https://maltais239.github.io/techitems/Bambux1.jpg": "https://maltais239.github.io/techitems/optimized-v1/20.webp"
};

const CACHE='bgsdCodingLibraryInventoryV2',PROFILE='bgsdCodingLibraryProfile';
const $=id=>document.getElementById(id);const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let allItems=CATALOG.map(x=>({...x})),activeFilter='all',activeSearch='',activeGrade='all',verified=false,inFlight=false,mutationEpoch=0,requestItem=null,requestMode='',busy=false,previousFocus=null,renderKey='',toastTimer;
let isPreview=false;let started=false;let syncTimer=null;let syncToken=0;
function readStore(key,fallback){try{return JSON.parse(localStorage.getItem(key))||fallback}catch(e){return fallback}}
function writeStore(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch(e){}}
function photo(item){return PHOTOS[item.img]||item.img||''}
function meta(item){return TOOLS[item.name]||{grades:[0,12],description:'Explore this classroom tool.',ideas:[],setup:'Contact the technology team for setup help.',lessons:[],why:'Adapt the activity to your learners.',mode:'Classroom tool'}}
function gradeLabel(t){return (t.grades[0]===0?'K':t.grades[0])+'–'+t.grades[1]}
function hydrate(items){
 const seed=new Map(CATALOG.map(x=>[x.name,x]));
 return items.filter(x=>x&&typeof x==='object'&&typeof x.name==='string'&&x.name.trim()).map(x=>({...seed.get(x.name),...x}));
}
function validateInventory(items){
 if(!Array.isArray(items)||!items.length)throw new Error('The server returned no inventory. Check the Inventory sheet and inventory snapshot.');
 const clean=hydrate(items);
 if(clean.length!==items.length)throw new Error('The inventory contains an invalid item.');
 const names=new Set();
 for(const item of clean){
  if(names.has(item.name))throw new Error('The inventory contains a duplicate tool: '+item.name);
  names.add(item.name);
  for(const field of ['available','total','waitlist']){
   if(item[field]===undefined&&field==='waitlist')item[field]=0;
   if(item[field]===null||item[field]===''||!Number.isFinite(Number(item[field]))||Number(item[field])<0)throw new Error('Invalid '+field+' value for '+item.name);
   item[field]=Number(item[field]);
  }
  if(item.available>item.total)throw new Error('Available sets exceed total sets for '+item.name);
  if(!Number.isFinite(Number(item.setSize))||Number(item.setSize)<1)throw new Error('Invalid set size for '+item.name);
  item.setSize=Number(item.setSize);
 }
 return clean;
}

function draw(items){
 allItems=validateInventory(items);
 render();updateSummary();
}

function updateSummary(){if(!verified){$('summary').textContent=allItems.length+' tools · Ready-to-use lessons';return}const available=allItems.reduce((n,i)=>n+Number(i.available||0),0);$('summary').textContent=allItems.length+' tools · '+available+' sets available'}
function render(){let list=allItems.filter(item=>{let t=meta(item);let grade=true;if(activeGrade!=='all'){const g=activeGrade.split('-').map(Number);grade=t.grades[0]<=(g[1]??g[0])&&t.grades[1]>=g[0]}return grade&&(!activeSearch||[item.name,t.description,t.mode,...t.ideas].join(' ').toLowerCase().includes(activeSearch))&&(activeFilter==='all'||(verified&&(activeFilter==='available'?item.available>0:item.available<1))) });
const key=JSON.stringify([list.map(x=>[x.name,x.img,x.setSize,x.available,x.total,x.waitlist]),verified,isPreview]);if(key===renderKey)return;
const grid=$('grid');
const shape=JSON.stringify(list.map(x=>[x.name,photo(x),x.setSize]));
if(grid.dataset.structure===shape&&grid.children.length===list.length){
 const cards=Array.from(grid.children);
 list.forEach((item,index)=>{
  const card=cards[index],ok=item.available>0,wait=Number(item.waitlist||0);
  const status=card.querySelector('.status');
  status.textContent=verified?(ok?item.available+' '+(item.available===1?'set':'sets')+' available':'Join the waitlist'):'Checking availability…';
  status.classList.toggle('wait',verified&&!ok);
  card.querySelector('.availability small').textContent=verified&&wait?wait+' waiting':(item.setSize===1?'1 item per loan':item.setSize+' per set');
  const button=card.querySelector('[data-request]');
  button.disabled=!verified||isPreview;
  button.classList.toggle('wait',verified&&!ok);
  button.textContent=verified?(ok?'Request set':'Join waitlist'):'Checking…';
 });
 renderKey=key;return;
}
$('grid').innerHTML=list.length?list.map((item,index)=>{const t=meta(item),ok=item.available>0;const known=verified;const status=known?(ok?item.available+' '+(item.available===1?'set':'sets')+' available':'Join the waitlist'):'Checking availability…';const units=item.setSize===1?'1 item per loan':item.setSize+' per set';const wait=Number(item.waitlist||0);
return '<article class="card"><button class="photo" data-info="'+esc(item.name)+'" aria-label="Tell me about '+esc(item.name)+'"><img src="'+esc(photo(item))+'" width="620" height="410" loading="'+(index<5?'eager':'lazy')+'" decoding="async" alt="'+esc(item.name)+'"></button><div class="card-body"><div class="pills"><span class="pill grade" title="Preliminary grade recommendation">Suggested '+gradeLabel(t)+'</span><span class="pill">'+esc(t.mode)+'</span></div><h2>'+esc(item.name)+'</h2><p class="description">'+esc(t.description)+'</p><div class="availability"><span class="status '+(known&&!ok?'wait':'')+'">'+esc(status)+'</span><small>'+esc(known&&wait?wait+' waiting':units)+'</small></div><div class="actions"><button class="secondary" data-info="'+esc(item.name)+'">Tell me more</button><button class="primary '+(known&&!ok?'wait':'')+'" data-request="'+esc(item.name)+'" '+(!known||isPreview?'disabled':'')+'>'+(known?(ok?'Request set':'Join waitlist'):'Checking…')+'</button></div>'+(t.lessons.length?'<span class="lessons-count">'+t.lessons.length+' lesson '+(t.lessons.length===1?'deck':'decks')+' inside</span>':'<span class="lessons-count">Classroom ideas &amp; getting started</span>')+'</div></article>'}).join(''):'<div class="empty">'+(!verified&&activeFilter!=='all'?'Availability is still loading. Browse all tools while it syncs.':'No tools match. Try another search or grade range.')+'</div>';grid.dataset.structure=shape;renderKey=key;}
function syncInventory(){
 if(isPreview||inFlight||busy)return;
 if(!(window.google&&window.google.script&&window.google.script.run)){
  $('sync').textContent='Tool information is ready. Live availability requires the deployed Apps Script web-app link.';
  return;
 }
 const token=++syncToken,epoch=mutationEpoch;
 inFlight=true;$('refresh').disabled=true;
 $('sync').textContent='Checking current availability…';
 clearTimeout(syncTimer);
 syncTimer=setTimeout(()=>{
  if(token!==syncToken||!inFlight)return;
  syncToken++;inFlight=false;$('refresh').disabled=false;
  $('sync').textContent='Availability has not responded yet. You can browse tools and slides, or use Refresh availability to try again.';
 },20000);
 function finish(){
  if(token!==syncToken)return false;
  clearTimeout(syncTimer);inFlight=false;$('refresh').disabled=false;
  return epoch===mutationEpoch;
 }
 try{
  window.google.script.run.withSuccessHandler(items=>{
   if(!finish())return;
   try{
    const clean=validateInventory(items);
    verified=true;allItems=clean;render();updateSummary();
    writeStore(CACHE,clean);$('sync').textContent='Availability updated just now.';
   }catch(error){syncError(error);}
  }).withFailureHandler(error=>{if(finish())syncError(error);}).getInventoryData();
 }catch(error){if(finish())syncError(error);}
}

function syncError(error){
 clearTimeout(syncTimer);inFlight=false;$('refresh').disabled=false;
 const detail=error&&error.message?error.message:String(error||'Unknown error');
 $('sync').textContent='Could not check availability: '+detail+' You can still explore tools and slides. Use Refresh availability to try again.';
 console.error('BGSD inventory sync failed:',error);
}

function openModal(id){previousFocus=document.activeElement;$(id).classList.add('open');document.body.classList.add('locked');$(id).querySelector('[data-close]').focus()}
function closeModal(id){if(id==='request-modal'&&busy)return;$(id).classList.remove('open');if(id==='info-modal')$('info-body').querySelectorAll('iframe').forEach(x=>x.remove());if(!document.querySelector('.modal.open'))document.body.classList.remove('locked');if(previousFocus&&document.contains(previousFocus))previousFocus.focus()}
function lessonHTML(indices){return '<div class="lesson-list">'+indices.map(i=>{const d=LESSONS[i];if(!d)return '';return '<div class="lesson"><span class="lesson-title">'+esc(d.title)+'</span><div class="lesson-controls"><button type="button" data-preview="'+i+'" aria-expanded="false">Preview</button><a href="'+esc(d.url)+'" target="_blank" rel="noopener">Open slides ↗</a></div><div class="preview" hidden></div></div>'}).join('')+'</div>'}
function openInfo(name){const item=allItems.find(x=>x.name===name);if(!item)return;const t=meta(item);$('info-eyebrow').textContent='Explore the tool';$('info-title').textContent=name;$('info-body').innerHTML='<div class="intro"><img src="'+esc(photo(item))+'" alt="'+esc(name)+'"><div><div class="pills"><span class="pill grade">Suggested grades '+gradeLabel(t)+'</span><span class="pill">'+esc(t.mode)+'</span></div><p>'+esc(t.description)+'</p><p><b>'+item.setSize+' '+(item.setSize===1?'item':'units')+' per loan</b></p></div></div><section class="info-section"><h3>Try it in your classroom</h3><ul>'+t.ideas.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></section><section class="info-section"><h3>Getting started</h3><p>'+esc(t.setup)+'</p></section><section class="info-section recommendation"><h3>Why these grades?</h3><p>'+esc(t.why)+'</p><small>Preliminary teaching recommendation · Grade ranges can be adjusted by Darren and Nicole.</small></section><section class="info-section"><h3>Lesson slides</h3>'+(t.lessons.length?lessonHTML(t.lessons):'<p>No dedicated slide deck has been linked for this tool yet.</p>')+'</section>'+(verified&&!isPreview?'<div class="info-section"><button class="primary" data-request="'+esc(name)+'">'+(item.available>0?'Request this set':'Join this waitlist')+'</button></div>':'');openModal('info-modal')}
function openLessons(){$('info-eyebrow').textContent='Teacher resources';$('info-title').textContent='Lesson slide library';$('info-body').innerHTML='<p style="color:var(--muted)">Browse all 26 current lesson decks. Older Tale-Bot activity and mat decks have been removed. Previews load only when you open them.</p>'+lessonHTML(LESSONS.map((_,i)=>i));openModal('info-modal')}
function togglePreview(button){const index=Number(button.dataset.preview),slot=button.closest('.lesson').querySelector('.preview');if(!slot.hidden){slot.replaceChildren();slot.hidden=true;button.textContent='Preview';button.setAttribute('aria-expanded','false');return}slot.hidden=false;const frame=document.createElement('iframe');frame.src=LESSONS[index].url.replace('/preview','/embed')+'?start=false&loop=false&delayms=3000';frame.title=LESSONS[index].title+' — slide preview';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';slot.append(frame);const note=document.createElement('p');note.textContent='If a deck requires your school account, use Open slides to view it in a new tab.';slot.append(note);button.textContent='Close preview';button.setAttribute('aria-expanded','true')}
function openRequest(name){if(isPreview||!verified||busy)return;const item=allItems.find(x=>x.name===name);if(!item)return;if($('info-modal').classList.contains('open'))closeModal('info-modal');requestItem=item;requestMode=item.available>0?'checkout':'waitlist';$('request-form').reset();const p=readStore(PROFILE,{});$('email').value=p.email||'';$('school').value=p.school||'';$('request-title').textContent=requestMode==='checkout'?'Request a set':'Join the waitlist';$('request-summary').textContent=name+' · '+item.setSize+' '+(item.setSize===1?'item':'units')+' per loan';$('date-fields').hidden=requestMode!=='checkout';$('pickup').required=$('return-date').required=requestMode==='checkout';$('wait-note').hidden=requestMode!=='waitlist';$('wait-note').textContent=Number(item.waitlist||0)?item.waitlist+' '+(item.waitlist===1?'person is':'people are')+' currently waiting.':'You will be first on this waitlist.';$('submit').textContent=requestMode==='checkout'?'Confirm checkout':'Join waitlist';$('form-error').textContent='';openModal('request-modal')}
function submitRequest(event){event.preventDefault();if(busy||isPreview||!verified||!requestItem)return;if(!(window.google&&window.google.script&&window.google.script.run)){$('form-error').textContent='The Apps Script connection is unavailable. Refresh the web app before submitting.';return;}const email=$('email').value.trim(),school=$('school').value.trim(),pickup=$('pickup').value,returnDate=$('return-date').value;if(!email||!school){$('form-error').textContent='Please enter your email and school.';return}if(requestMode==='checkout'&&(!pickup||!returnDate)){$('form-error').textContent='Please choose both dates.';return}if(requestMode==='checkout'&&returnDate<pickup){$('form-error').textContent='Return date must be on or after the pick-up date.';return}writeStore(PROFILE,{email,school});busy=true;mutationEpoch++;syncToken++;clearTimeout(syncTimer);inFlight=false;$('refresh').disabled=false;$('submit').disabled=true;$('submit').textContent='Submitting…';$('form-error').textContent='';const name=requestItem.name;const run=google.script.run.withSuccessHandler(result=>{busy=false;$('submit').disabled=false;if(result&&result.inventory){verified=true;draw(result.inventory);writeStore(CACHE,result.inventory);$('sync').textContent='Availability updated just now.'}closeModal('request-modal');showToast(requestMode==='waitlist'?'You are #'+result.position+' on the waitlist for '+name+'.':name+' is confirmed. Check your email for details.')}).withFailureHandler(err=>{busy=false;$('submit').disabled=false;$('submit').textContent=requestMode==='checkout'?'Confirm checkout':'Join waitlist';$('form-error').textContent=err&&err.message?err.message:String(err);syncInventory()});if(requestMode==='waitlist')run.addToWaitlist(name,email,school);else run.processDashboardCheckout(name,email,school,pickup,returnDate)}
function showToast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),6000)}

function connectWhenReady(attempt){
 if(window.google&&window.google.script&&window.google.script.run){syncInventory();return;}
 if(attempt<40){setTimeout(()=>connectWhenReady(attempt+1),250);return;}
 $('sync').textContent='The Apps Script connection is unavailable. Open the deployed web-app link, or refresh this page.';
}
function startLibrary(){
 if(started)return;started=true;window.BGSD_LIBRARY_STARTED=true;
 try{
  isPreview=location.protocol==='file:'&&!(window.google&&window.google.script&&window.google.script.run);
  document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-info'))openInfo(b.dataset.info);else if(b.hasAttribute('data-request'))openRequest(b.dataset.request);else if(b.hasAttribute('data-close'))closeModal(b.closest('.modal').id);else if(b.hasAttribute('data-preview'))togglePreview(b)});
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));document.addEventListener('keydown',e=>{const m=document.querySelector('.modal.open');if(!m)return;if(e.key==='Escape'){closeModal(m.id);return}if(e.key==='Tab'){const nodes=[...m.querySelectorAll('button:not(:disabled),a[href],input:not([type=hidden]),select,iframe')].filter(x=>x.getClientRects().length);const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
$('search').addEventListener('input',e=>{activeSearch=e.target.value.trim().toLowerCase();render()});$('grade').addEventListener('change',e=>{activeGrade=e.target.value;render()});document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render()}));$('refresh').addEventListener('click',syncInventory);$('all-lessons').addEventListener('click',openLessons);$('request-form').addEventListener('submit',submitRequest);
if(isPreview){$('demo').hidden=false;$('refresh').hidden=true;verified=true;allItems=CATALOG.map((x,i)=>({...x,total:1,available:[1,2,6,18,23].includes(i)?0:1,waitlist:i===6?3:i===1?1:0}));$('sync').textContent='Design preview · These are sample availability figures.'}else{const cached=readStore(CACHE,null);if(Array.isArray(cached)&&cached.length){const restored=hydrate(cached);if(restored.length)allItems=restored}}render();updateSummary();if(!isPreview)connectWhenReady(0);


 }catch(error){
  console.error('BGSD library startup failed:',error);
  const status=document.getElementById('sync');
  if(status)status.textContent='Library startup error: '+(error&&error.message?error.message:String(error));
  try{allItems=CATALOG.map(x=>({...x}));renderKey='';render();}catch(ignore){}
 }
}
startLibrary();

})();

