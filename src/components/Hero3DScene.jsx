import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // ── Scene ──────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050b14, 0.028);

    // ── Camera ─────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      50,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      300
    );
    camera.position.set(0, 4, 18);
    camera.lookAt(0, 1, 0);

    // ── Renderer ───────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // ── Materials ──────────────────────────────────────────────
    const goldMat = new THREE.MeshPhongMaterial({
      color: 0xd4af37,
      emissive: 0x4a3800,
      specular: 0xfff5c0,
      shininess: 180,
    });

    const darkWallMat = new THREE.MeshPhongMaterial({
      color: 0x0d1f33,
      emissive: 0x071020,
      specular: 0x2a4a6a,
      shininess: 80,
    });

    const glassMat = new THREE.MeshPhongMaterial({
      color: 0x38bdf8,
      emissive: 0x082030,
      specular: 0xffffff,
      shininess: 200,
      transparent: true,
      opacity: 0.5,
    });

    const roofMat = new THREE.MeshPhongMaterial({
      color: 0x0a0f1a,
      emissive: 0x050810,
      specular: 0xd4af37,
      shininess: 60,
      flatShading: true,
    });

    const floorMat = new THREE.MeshPhongMaterial({
      color: 0x091525,
      emissive: 0x040b18,
      specular: 0x1a3a5a,
      shininess: 120,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    // ── House group ────────────────────────────────────────────
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);

    // ── Ground platform ────────────────────────────────────────
    const groundGeo = new THREE.BoxGeometry(12, 0.25, 9);
    const ground = new THREE.Mesh(groundGeo, floorMat);
    ground.position.y = -2.125;
    ground.receiveShadow = true;
    houseGroup.add(ground);

    // Gold border edge on ground
    const edgeGeo = new THREE.EdgesGeometry(groundGeo);
    const edgeLine = new THREE.LineSegments(edgeGeo, new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.5 }));
    edgeLine.position.y = -2.125;
    houseGroup.add(edgeLine);

    // ── Main building walls ────────────────────────────────────
    // Back wall
    const buildWallGeo = new THREE.BoxGeometry(7, 4, 0.2);
    const backWall = new THREE.Mesh(buildWallGeo, darkWallMat);
    backWall.position.set(0, 0, -3);
    backWall.castShadow = true;
    houseGroup.add(backWall);

    // Left wall
    const sideWallGeo = new THREE.BoxGeometry(0.2, 4, 6);
    const leftWall = new THREE.Mesh(sideWallGeo, darkWallMat);
    leftWall.position.set(-3.5, 0, 0);
    leftWall.castShadow = true;
    houseGroup.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(sideWallGeo, darkWallMat);
    rightWall.position.set(3.5, 0, 0);
    rightWall.castShadow = true;
    houseGroup.add(rightWall);

    // Front wall left portion
    const frontLeftGeo = new THREE.BoxGeometry(2.2, 4, 0.2);
    const frontLeft = new THREE.Mesh(frontLeftGeo, darkWallMat);
    frontLeft.position.set(-2.4, 0, 3);
    houseGroup.add(frontLeft);

    // Front wall right portion
    const frontRight = new THREE.Mesh(frontLeftGeo, darkWallMat);
    frontRight.position.set(2.4, 0, 3);
    houseGroup.add(frontRight);

    // Front lintel above door
    const lintelGeo = new THREE.BoxGeometry(2.6, 0.4, 0.2);
    const lintel = new THREE.Mesh(lintelGeo, goldMat);
    lintel.position.set(0, 1.8, 3);
    houseGroup.add(lintel);

    // Front lower below door (step)
    const stepGeo = new THREE.BoxGeometry(1.8, 0.3, 0.4);
    const step = new THREE.Mesh(stepGeo, goldMat);
    step.position.set(0, -2, 3.2);
    houseGroup.add(step);

    // ── Door (glass dark) ──────────────────────────────────────
    const doorGeo = new THREE.BoxGeometry(1.8, 3.4, 0.1);
    const door = new THREE.Mesh(doorGeo, glassMat);
    door.position.set(0, 0.3, 3.05);
    houseGroup.add(door);

    // ── Large Glass windows ────────────────────────────────────
    const winGeo = new THREE.BoxGeometry(1.6, 1.4, 0.08);
    const positions2D = [
      [-2.2, 0.5, -2.9],  // back-left window
      [ 2.2, 0.5, -2.9],  // back-right window
    ];
    positions2D.forEach(([x, y, z]) => {
      const win = new THREE.Mesh(winGeo, glassMat);
      win.position.set(x, y, z);
      houseGroup.add(win);
      // Gold frame around window
      const frame = new THREE.LineSegments(new THREE.EdgesGeometry(winGeo), new THREE.LineBasicMaterial({ color: 0xd4af37 }));
      frame.position.set(x, y, z);
      houseGroup.add(frame);
    });

    // Side windows
    const sideWinGeo = new THREE.BoxGeometry(0.08, 1.2, 1.4);
    const sideWinPositions = [
      [-3.45, 0.4, -0.8],
      [-3.45, 0.4,  1.2],
      [ 3.45, 0.4, -0.8],
      [ 3.45, 0.4,  1.2],
    ];
    sideWinPositions.forEach(([x, y, z]) => {
      const sw = new THREE.Mesh(sideWinGeo, glassMat);
      sw.position.set(x, y, z);
      houseGroup.add(sw);
    });

    // ── Gold accent trim (horizontal belt line) ────────────────
    const trimGeo = new THREE.BoxGeometry(7.05, 0.15, 6.05);
    const trimTop = new THREE.Mesh(trimGeo, goldMat);
    trimTop.position.set(0, 2.07, 0);
    houseGroup.add(trimTop);

    const trimBottom = new THREE.Mesh(new THREE.BoxGeometry(7.05, 0.12, 6.05), goldMat);
    trimBottom.position.set(0, -2, 0);
    houseGroup.add(trimBottom);

    // ── Pitched roof ───────────────────────────────────────────
    // Roof is made from a custom cone-like prism shape using BoxGeometry + rotation
    // We use two slanted box panels to form a peaked roof
    const roofPanelGeo = new THREE.BoxGeometry(7.6, 0.18, 3.6);

    const roofLeft = new THREE.Mesh(roofPanelGeo, roofMat);
    roofLeft.position.set(0, 2.85, -1.55);
    roofLeft.rotation.x = Math.PI / 5.5;
    houseGroup.add(roofLeft);

    const roofRight = new THREE.Mesh(roofPanelGeo, roofMat);
    roofRight.position.set(0, 2.85, 1.55);
    roofRight.rotation.x = -Math.PI / 5.5;
    houseGroup.add(roofRight);

    // Roof ridge (peak gold beam)
    const ridgeGeo = new THREE.BoxGeometry(7.4, 0.15, 0.15);
    const ridge = new THREE.Mesh(ridgeGeo, goldMat);
    ridge.position.set(0, 3.6, 0);
    houseGroup.add(ridge);

    // Wireframe overlay on roof panels for blueprint look
    const roofWireLeft = new THREE.Mesh(roofPanelGeo, wireMat);
    roofWireLeft.position.copy(roofLeft.position);
    roofWireLeft.rotation.copy(roofLeft.rotation);
    houseGroup.add(roofWireLeft);

    const roofWireRight = new THREE.Mesh(roofPanelGeo, wireMat);
    roofWireRight.position.copy(roofRight.position);
    roofWireRight.rotation.copy(roofRight.rotation);
    houseGroup.add(roofWireRight);

    // ── Chimney ────────────────────────────────────────────────
    const chimneyGeo = new THREE.BoxGeometry(0.7, 2.2, 0.7);
    const chimney = new THREE.Mesh(chimneyGeo, darkWallMat);
    chimney.position.set(2.2, 3.7, -1.4);
    chimney.castShadow = true;
    houseGroup.add(chimney);

    const chimneyCapGeo = new THREE.BoxGeometry(0.85, 0.18, 0.85);
    const chimneyCap = new THREE.Mesh(chimneyCapGeo, goldMat);
    chimneyCap.position.set(2.2, 4.9, -1.4);
    houseGroup.add(chimneyCap);

    // ── Garden pillars ─────────────────────────────────────────
    const pillarGeo = new THREE.CylinderGeometry(0.18, 0.2, 3, 8);
    const capGeo = new THREE.BoxGeometry(0.5, 0.18, 0.5);
    const pillarPositions = [[-4.5, 3.15, 4.2], [4.5, 3.15, 4.2]];
    pillarPositions.forEach(([x, y, z]) => {
      const pillar = new THREE.Mesh(pillarGeo, goldMat);
      pillar.position.set(x, -0.5, z);
      houseGroup.add(pillar);
      const cap = new THREE.Mesh(capGeo, goldMat);
      cap.position.set(x, 1.08, z);
      houseGroup.add(cap);
      const base = new THREE.Mesh(capGeo, goldMat);
      base.position.set(x, -2.0, z);
      houseGroup.add(base);
    });

    // Fence connecting pillars (gold bar)
    const fenceGeo = new THREE.BoxGeometry(9.2, 0.1, 0.1);
    const fence = new THREE.Mesh(fenceGeo, goldMat);
    fence.position.set(0, 1.08, 4.2);
    houseGroup.add(fence);

    // ── Floating wireframe halo ring ───────────────────────────
    const haloGeo = new THREE.TorusGeometry(7, 0.04, 12, 80);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.35 });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI / 2;
    halo.position.y = 3.9;
    houseGroup.add(halo);

    const halo2 = new THREE.Mesh(new THREE.TorusGeometry(8.5, 0.025, 10, 60), haloMat);
    halo2.rotation.x = Math.PI / 2;
    halo2.position.y = -2.5;
    houseGroup.add(halo2);

    // ── Ambient glowing particles ──────────────────────────────
    const pCount = 320;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pCol = new Float32Array(pCount * 3);
    const goldC = new THREE.Color(0xd4af37);
    const skyC  = new THREE.Color(0x38bdf8);

    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i]     = (Math.random() - 0.5) * 50;
      pPos[i + 1] = (Math.random() - 0.5) * 30;
      pPos[i + 2] = (Math.random() - 0.5) * 50;
      const c = Math.random() > 0.6 ? goldC : skyC;
      pCol[i] = c.r; pCol[i + 1] = c.g; pCol[i + 2] = c.b;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));

    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.1, vertexColors: true, transparent: true, opacity: 0.7,
    }));
    scene.add(particles);

    // ── Lighting ───────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const sun = new THREE.DirectionalLight(0xfff5d0, 2.2);
    sun.position.set(10, 18, 10);
    sun.castShadow = true;
    scene.add(sun);

    const goldPoint = new THREE.PointLight(0xd4af37, 3.5, 35);
    goldPoint.position.set(5, 8, 5);
    scene.add(goldPoint);

    const bluePoint = new THREE.PointLight(0x0284c7, 2.5, 40);
    bluePoint.position.set(-8, -4, 8);
    scene.add(bluePoint);

    // Interior glow effect (inside house)
    const interiorGlow = new THREE.PointLight(0x38bdf8, 1.8, 10);
    interiorGlow.position.set(0, 0, 0);
    houseGroup.add(interiorGlow);

    // ── Mouse parallax ─────────────────────────────────────────
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ── Animation ──────────────────────────────────────────────
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle auto-rotate
      houseGroup.rotation.y = t * 0.08;

      // Halo pulse
      halo.rotation.z  = t * 0.03;
      halo2.rotation.z = -t * 0.05;

      // Interior glow pulsing
      interiorGlow.intensity = 1.2 + Math.sin(t * 2.2) * 0.8;

      // Particles drift
      particles.rotation.y = t * 0.018;

      // Mouse parallax — camera offset
      targetX += (mouseX * 2.5 - targetX) * 0.04;
      targetY += (-mouseY * 1.5 - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = 4 + targetY;
      camera.lookAt(0, 1, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize ─────────────────────────────────────────────────
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
