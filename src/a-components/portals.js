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
  isInside(el, bound) {
    const cameraPosition = new THREE.Vector3();
    el.object3D.getWorldPosition(cameraPosition);

    return bound.containsPoint(cameraPosition);
  },
  isActivated() {
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

    return Array.from(document.querySelectorAll('.portal-activator'))
      .filter(el => this.isInside(el, portalBound))
      .length > 0;
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
    if (this.isActivated()) {
      this.teleport();
    }
  },
});
