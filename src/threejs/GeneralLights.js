import * as THREE from 'three'

export default scene => {

    const ambientLightAbove = new THREE.PointLight("#CCC", 1);
    ambientLightAbove.position.set(0,0,30);

    scene.add(ambientLightAbove);

    function update(time) {
    }

    return {
        update
    }
}