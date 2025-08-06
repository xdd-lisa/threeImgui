import { ReactElement, useEffect } from 'react';
import { 
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  BoxGeometry, 
  MeshLambertMaterial, 
  Mesh, 
  AmbientLight,
  PointLight,
  AxesHelper,
  PointLightHelper
} from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function HomePage() {
  const scene = new Scene();
  const width = 800;
  const height = 500;

  useEffect(() => {
    const camera = new PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 90);
    camera.lookAt(0,0,0);  

    const renderer = new WebGLRenderer();
    renderer.setSize(width, height);

    const geometry = new BoxGeometry( 20, 20, 20 );
    const material = new MeshLambertMaterial( { 
      color: '#0000ff',
      opacity: 0.5, // 设置透明度
      transparent: true, // 开启透明度
    } );
    const mesh = new Mesh( geometry, material );
    scene.add( mesh );
    // mesh.position.set(0, 100, 0);

    // 添加一个点光源
    const pointLight = new PointLight('#fff', 0.4);
    pointLight.position.set(400, 200, 300);
    scene.add(pointLight)

    // 添加一个环境光
    const ambient = new AmbientLight('#fff', 1.0);
    scene.add(ambient);

    const axesHelper = new AxesHelper(50);
    scene.add( axesHelper );

    // 可视化点光源
    const pointLightHelper = new PointLightHelper(pointLight, 10);
    scene.add(pointLightHelper);

    renderer.render( scene, camera );

    

    // function animate() {
    //   requestAnimationFrame( animate );

    //   mesh.rotation.x += 0.01;
    //   mesh.rotation.y += 0.01;
    //   mesh.rotation.z += 0.01;

    //   renderer.render( scene, camera );
    // }

    // animate();
    // 设置相机控件轨道控制器OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
    controls.addEventListener('change', function () {
        renderer.render(scene, camera); //执行渲染操作
    });//监听鼠标、键盘事件

    const dm = document.querySelector('#rrot');
    dm && dm.appendChild(renderer.domElement);
  }, [])

  return (
    <div id="rrot" />
  );
}
