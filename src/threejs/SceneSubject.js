import * as THREE from 'three'
import GLTFLoader from 'three-gltf-loader';//GLTFLoader not included by default, but this should be the "official" one.

const objects = {
    unicornGLTF: require('../objects/baby_unicorn_final.glb'),
};

export default scene => {
    const loader = new GLTFLoader();

    //Could theoretically just display the unicorn, but having it as a group allows for moving an entire scene around
    let unicorn = new THREE.Object3D();
    let group = new THREE.Group();

    //Loads the object, then, after loading, runs the function.
    //I'm sure there there other ways to handle this, but make sure to watch out for
    //async issues if/when adding additional objects to the scene.
    loader.load(objects.unicornGLTF, function (object){
        unicorn = object.scene; //Not sure what format object is in, but .scene makes it Object3D
        unicorn.translateY(-5); //Unicorn starts a bit high, due to starting above the origin
        unicorn.scale.set(7, 7, 7); //Unicorn is small, so scaling up.
        //unicorn.rotateY(45); //The update rotates the unicorn, so setting it up here seems unnecessary.
        group.add(unicorn);
        scene.add(group);
    },
        // called while loading is progressing
        function ( xhr ) {
            //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); //This didn't seem particularly useful, so commenting out for now.
        },
        // called when loading has errors
        function ( error ) {
            console.log( 'An error happened: ' + error.toString());
        }
        );

    const speed = 0.2;

    function update(time) {
        group.rotation.y = time*speed;
    }

    return {
        update
    }
}