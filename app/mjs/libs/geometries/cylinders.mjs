// Link: https://threejs.org/docs/#api/en/geometries/CylinderGeometry

import {black, white, red, yellow, green, blue} from "../colors.mjs"

import {standardMaterial} from "../materials.mjs"

export function newCylinder(length=10, positiveRadius=10, negativeRadius=10, position=[0, 0, 0], color=black, radialSegments=42) {

  let geometry = new THREE.CylinderGeometry(positiveRadius, negativeRadius, length, radialSegments)
  let cylinder = new THREE.Mesh(geometry, standardMaterial(color))

  cylinder.position.set(position[0], position[1], position[2])

  return cylinder

}

export function addCylinder(length=10, positiveRadius=10, negativeRadius=10, position=[0, 0, 0], color=black, radialSegments=42) {

  let cylinder = newCylinder(length, positiveRadius, negativeRadius, position, color, radialSegments)

  data.scene.add(cylinder)

  return cylinder

}
