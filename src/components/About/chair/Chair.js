import React, {useRef , useEffect} from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Chair.scss'
import modelPath from '../../../assets/model/chair/chair.glb'

import legs from '../../../assets/img/chair/legs.svg'
import cushions from '../../../assets/img/chair/cushions.svg'
import base from '../../../assets/img/chair/base.svg'
import supports from '../../../assets/img/chair/supports.svg'
import back from '../../../assets/img/chair/back.svg'

import {colors} from './ChairTexture'

function Chair() {
  const canvasRef = useRef(null);
  const blockChairRef = useRef(null);
  const traySlideRef = useRef(null);
  const dragNoticeRef = useRef(null);

  useEffect(() => {
    var chairModel;
    var loaded = false;
    const duration = 1500;
    var activeOption = 'legs';
    const BACKGROUND_COLOR = 0xffffff;
    const scene = new THREE.Scene();
    // Set background
    scene.background = new THREE.Color(BACKGROUND_COLOR);
    scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);

    const renderer = new THREE.WebGLRenderer ({ canvas: canvasRef.current, antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio); 
    blockChairRef.current.appendChild(renderer.domElement);

    // Add a camera
    var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.x = 0;

    // Init the object loader
    var loader = new GLTFLoader();

    loader.load(modelPath, function(gltf) {
      chairModel = gltf.scene; 

      chairModel.scale.set(2,2,2);
      chairModel.rotation.y = Math.PI;
      chairModel.position.y = -1;
      scene.add(chairModel);
      
      
      function initColor(parent, type, mtl) {
        parent.traverse((o) => {
         if (o.isMesh) {
           if (o.name.includes(type)) {
                o.material = mtl;
                o.nameID = type;
             }
         }
       });
      }

      for (let object of INITIAL_MAP) {
        initColor(chairModel, object.childID, object.mtl);
      }

    // Function - Build Colors
    function buildColors(colors) {
      for (let [i, color] of colors.entries()) {
        let swatch = document.createElement('div');
        swatch.classList.add('traySwatch');
        
        if (color.texture)
        {
          swatch.style.backgroundImage = `url(${color.texture}`;   
        } else
        {
          swatch.style.background = "#" + color.color;
        }
    
        swatch.setAttribute('data-key', i);
        traySlideRef.current.append(swatch);
      }
    }

    buildColors(colors);

    const swatches = document.querySelectorAll(".traySwatch");

    for (const swatch of swatches) {
      swatch.addEventListener('click', selectSwatch);
    }

    function selectSwatch(e) {
      let color = colors[parseInt(e.target.dataset.key)];
      let new_mtl;
 
     if (color.texture) {
       
       let txt = new THREE.TextureLoader().load(color.texture);
       
       txt.repeat.set( color.size[0], color.size[1], color.size[2]);
       txt.wrapS = THREE.RepeatWrapping;
       txt.wrapT = THREE.RepeatWrapping;
       
       new_mtl = new THREE.MeshPhongMaterial( {
         map: txt,
         shininess: color.shininess ? color.shininess : 10
       });    
     } 
     else
     {
       new_mtl = new THREE.MeshPhongMaterial({
           color: parseInt('0x' + color.color),
           shininess: color.shininess ? color.shininess : 10
           
         });
     }
     
     setMaterial(chairModel, activeOption, new_mtl);
    }

    function setMaterial(parent, type, mtl) {
      parent.traverse((o) => {
       if (o.isMesh && o.nameID != null) {
         if (o.nameID === type) {
              o.material = mtl;
           }
       }
     });
    }

    let hideOptions = document.querySelectorAll(".traySlide div");

    function hideAllOptions(hideOptions) {
      for (var i = 0; i < hideOptions.length; i++) {
        hideOptions[i].style.display = "none";
      }
    }
    
    hideAllOptions(hideOptions);

    let defaultShow = document.querySelectorAll(".traySlide div:nth-child(n+1):nth-child(-n+8)");
    for (var i = 0; i < defaultShow.length; i++) {
      defaultShow[i].style.display = "";
    }

    // Select Option
    const options = document.querySelectorAll(".option");

    for (const option of options) {
      option.addEventListener('click',selectOption);
    }

    function selectOption(e) {
      const TWEEN = require('@tweenjs/tween.js')
      let option = e.target;
      activeOption = e.target.dataset.option;
      for (const otherOption of options) {
        otherOption.classList.remove('--is-active');
      }
      option.classList.add('--is-active');

      if (activeOption === "legs") {
        tweenAnimate();
        controls.enabled = false;
        var positionLegs = new THREE.Vector3().copy(camera.position);
        var targetPositionLegs = new THREE.Vector3(3, 3, 3);
    
        new TWEEN.Tween(positionLegs)
          .to(targetPositionLegs, duration)
          .easing(TWEEN.Easing.Back.InOut)
          .onUpdate(function () {
            camera.position.copy(positionLegs);
            camera.lookAt(controls.target);
          })
          .onComplete(function () {
            camera.position.copy(targetPositionLegs);
            camera.lookAt(controls.target);
            controls.enabled = true;
          })
          .start();
    
        hideOptions = document.querySelectorAll(".traySlide div");
        hideAllOptions(hideOptions);
    
        let legShow = document.querySelectorAll(".traySlide div:nth-child(n+1):nth-child(-n+8)");
        
        for (i = 0; i < legShow.length; i++) {
          console.log(legShow[i])
          legShow[i].style.display = "";
        }
      } else if (activeOption === "cushions") {
        tweenAnimate();
        controls.enabled = false;
        var positionCushions = new THREE.Vector3().copy(camera.position);
        var targetPositionCushions = new THREE.Vector3(0, 2, 4);
    
        new TWEEN.Tween(positionCushions)
          .to(targetPositionCushions, duration)
          .easing(TWEEN.Easing.Back.InOut)
          .onUpdate(function () {
            camera.position.copy(positionCushions);
            camera.lookAt(controls.target);
          })
          .onComplete(function () {
            camera.position.copy(targetPositionCushions);
            camera.lookAt(controls.target);
            controls.enabled = true;
          })
          .start();
    
        hideOptions = document.querySelectorAll(".traySlide div");
        hideAllOptions(hideOptions);
    
        let cushionShow = document.querySelectorAll(".traySlide div:nth-child(n+9):nth-child(-n+16)");
        for (i = 0; i < cushionShow.length; i++) {
          cushionShow[i].style.display = "";
        }
      } else if (activeOption === "base") {
        tweenAnimate();
        controls.enabled = false;
        var positionBase = new THREE.Vector3().copy(camera.position);
        var targetPositionBase = new THREE.Vector3(0, 0, 4);
    
        new TWEEN.Tween(positionBase)
          .to(targetPositionBase, duration)
          .easing(TWEEN.Easing.Back.InOut)
          .onUpdate(function () {
            camera.position.copy(positionBase);
            camera.lookAt(controls.target);
          })
          .onComplete(function () {
            camera.position.copy(targetPositionBase);
            camera.lookAt(controls.target);
            controls.enabled = true;
          })
          .start();
    
        hideOptions = document.querySelectorAll(".traySlide div");
        hideAllOptions(hideOptions);
    
        const baseShow = document.querySelectorAll(".traySlide div:nth-child(n+1):nth-child(-n+8)");
        for (i = 0; i < baseShow.length; i++) {
          baseShow[i].style.display = "";
        }
      } else if (activeOption === "supports") {
        tweenAnimate();
        controls.enabled = false;
        var positionSupports = new THREE.Vector3().copy(camera.position);
        var targetPositionSupports = new THREE.Vector3(0, 2, -3);
    
        new TWEEN.Tween(positionSupports)
          .to(targetPositionSupports, duration)
          .easing(TWEEN.Easing.Back.InOut)
          .onUpdate(function () {
            camera.position.copy(positionSupports);
            camera.lookAt(controls.target);
          })
          .onComplete(function () {
            camera.position.copy(targetPositionSupports);
            camera.lookAt(controls.target);
            controls.enabled = true;
          })
          .start();
    
        hideOptions = document.querySelectorAll(".traySlide div");
        hideAllOptions(hideOptions);
    
        let supportsShow = document.querySelectorAll(".traySlide div:nth-child(n+1):nth-child(-n+8)");
        for (i = 0; i < supportsShow.length; i++) {
          supportsShow[i].style.display = "";
        }
      } else if (activeOption === "back") {
        tweenAnimate();
        controls.enabled = false;
        var positionBack = new THREE.Vector3().copy(camera.position);
        var targetPositionBack = new THREE.Vector3(0, 1, -4);
    
        new TWEEN.Tween(positionBack)
          .to(targetPositionBack, duration)
          .easing(TWEEN.Easing.Back.InOut)
          .onUpdate(function () {
            camera.position.copy(positionBack);
            camera.lookAt(controls.target);
          })
          .onComplete(function () {
            camera.position.copy(targetPositionBack);
            camera.lookAt(controls.target);
            controls.enabled = true;
          })
          .start();
    
        hideOptions = document.querySelectorAll(".traySlide div");
        hideAllOptions(hideOptions);
    
        let backShow = document.querySelectorAll(".traySlide div:nth-child(n+1):nth-child(-n+8)");
        for (i = 0; i < backShow.length; i++) {
          backShow[i].style.display = "";
        }
      }
    }

    }, undefined, function(error) {
      console.error(error)
    });

    // Add lights
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.61 );
    hemiLight.position.set( 0, 50, 0 );
    // Add hemisphere light to scene   
    scene.add( hemiLight );

    var dirLight = new THREE.DirectionalLight( 0xffffff, 0.54 );
    dirLight.position.set( -8, 12, 8 );
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    // Add directional Light to scene    
    scene.add( dirLight );

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      var width = window.innerWidth;
      var height = window.innerHeight;
      var canvasPixelWidth = canvas.width / window.devicePixelRatio;
      var canvasPixelHeight = canvas.height / window.devicePixelRatio;
    
      const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    // Initial material
    const INITIAL_MTL = new THREE.MeshPhongMaterial( { color: 0xf1f1f1, shininess: 10 } );

    const INITIAL_MAP = [
      {childID: "back", mtl: INITIAL_MTL},
      {childID: "base", mtl: INITIAL_MTL},
      {childID: "cushions", mtl: INITIAL_MTL},
      {childID: "legs", mtl: INITIAL_MTL},
      {childID: "supports", mtl: INITIAL_MTL},
    ];

    // Add controls
    var controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 3;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.dampingFactor = 0.1;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.2;

    // Function - Opening rotate
    let initRotate = 0;

    function initialRotation() {
    initRotate++;
    if (initRotate <= 120) {
        chairModel.rotation.y += Math.PI / 60;
      } else {
        loaded = true;
      }
    }

    function tweenAnimate() {
      const TWEEN = require('@tweenjs/tween.js')
      camera.updateProjectionMatrix();
      requestAnimationFrame(tweenAnimate);
      TWEEN.update();
    }

    function animate() {

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      
      if (chairModel != null && loaded === false) {
        initialRotation();
        dragNoticeRef.current.classList.add('start');
      }
    }
    
    animate();

  }, [])

  return (
    <div className="chairContainer" ref={blockChairRef}>
        <canvas className="customChair" ref={canvasRef}/>
        <div className="info">
          <div className="infoMessage">
            <p><strong>&nbsp;Тяните&nbsp;</strong> для вращения стула.</p>
          </div>
        </div>
        <div className="options">
          <div className="option --is-active" data-option="legs">
            <img src={legs} alt="" />
          </div>
          <div className="option" data-option="cushions">
            <img src={cushions} alt="" />
          </div>
          <div className="option" data-option="base">
            <img src={base} alt="" />
          </div>
          <div className="option" data-option="supports">
            <img src={supports} alt="" />
          </div>
          <div className="option" data-option="back">
            <img src={back} alt="" />
          </div>
        </div>
        <span className="dragNotice" ref={dragNoticeRef}>Загрузка модели</span>
        <div className="controls">
          <div id="js-tray" className="tray">
            <div className="traySlide" ref={traySlideRef}/>
          </div>
        </div>
      </div>
  )
}

export default Chair
