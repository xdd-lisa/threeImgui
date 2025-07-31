import { ReactElement, useEffect } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export default function HomePage() {
  const scene = new Scene();

  useEffect(() => {
    const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new WebGLRenderer();
    renderer.setSize( 300, 300 );
    const dm = document.querySelector('#rrot');
    dm && dm.appendChild(renderer.domElement);

    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: '0x00ff00' } );
    const cube = new Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 2;

    function animate() {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    }

    animate();
  }, [])

  return (
    <div id="rrot" />
  );
}
