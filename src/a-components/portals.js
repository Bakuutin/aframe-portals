import { isEmpty } from 'lodash';

import router from '../router';

AFRAME.registerComponent('portal', {
  dependencies: ['geometry'],
  schema: {
    location: {
      type: 'vec3',
    },
    path: {
      type: 'string',
      default: '/',
    },
  },
  isCameraInPortal() {
    const cameraPosition = new THREE.Vector3();
    document.querySelector('#camera').object3D.getWorldPosition(cameraPosition);

    let portalBound;

    if (this.el.components.geometry.data.primitive === 'sphere') {
      const portalPosition = new THREE.Vector3();
      this.el.object3D.getWorldPosition(portalPosition);
      portalBound = new THREE.Sphere(
        portalPosition,
        this.el.components.geometry.data.radius,
      );
    } else {
      portalBound = new THREE.Box3().setFromObject(this.el.getObject3D('mesh'));
    }

    return portalBound.containsPoint(cameraPosition);
  },
  teleport() {
    if (this.data.path) {
      router.push({ path: this.data.path });
    }

    if (!isEmpty(this.data.location)) {
      document.querySelector('#rig').setAttribute('position', this.data.location);
    }
  },
  tick() {
    if (this.isCameraInPortal()) {
      this.teleport();
    }
  },
});
