import store from '../store';

AFRAME.registerComponent('store-position', {
  dependencies: ['geometry'],
  schema: {
    key: {
      type: 'string',
    },
  },
  tick() {
    store.commit(
      'setValue',
      { key: this.data.key, value: this.getPosition() },
    );
  },
  getPosition() {
    const position = new THREE.Vector3();
    this.el.object3D.getWorldPosition(position);
    return {...position };
  },
});
