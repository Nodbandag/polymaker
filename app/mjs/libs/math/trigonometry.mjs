import {degree2radian, radian2degree} from "../tools.mjs"

// In all triangles the sum of the angles is always equal to 180 degrees.
export function angle4angles(x=null, y=null) {

  if (x + y < 180) {

    return 180 - x - y

  } else {

    return null

  }

}

// Remember: SOH-CAH-TOA
export function angle4sides(hypotenuse=null, adjacent=null, opposite=null) {

  if (typeof(hypotenuse) == "number" && !adjacent && typeof(opposite) == "number") {

    return radian2degree(Math.asin(opposite / hypotenuse))

  } else if (typeof(hypotenuse) == "number" && typeof(adjacent) == "number" && !opposite) {

    return radian2degree(Math.acos(adjacent / hypotenuse))

  } else if (!hypotenuse && typeof(adjacent) == "number" && typeof(opposite) == "number") {

    return radian2degree(Math.atan(opposite / adjacent))

  } else {

    return null

  }

}

// Remember: SOH-CAH-TOA
export function side4angle(angle=null, hypotenuse=null, adjacent=null, opposite=null) {

  if (typeof(angle) == "number" && angle < 180) {

    if (typeof(hypotenuse) == "number") {

      if (adjacent) {

        return hypotenuse * Math.cos(degree2radian(angle))

      } else if (opposite) {

        return hypotenuse * Math.sin(degree2radian(angle))

      } else {

        return null

      }

    } else if (typeof(adjacent) == "number") {

      if (hypotenuse) {

        return adjacent / Math.cos(degree2radian(angle))

      } else if (opposite) {

        return adjacent * Math.tan(degree2radian(angle))

      } else {

        return null

      }

    } else if (typeof(opposite) == "number") {

      if (hypotenuse) {

        return opposite / Math.sin(degree2radian(angle))

      } else if (adjacent) {

        return opposite / Math.tan(degree2radian(angle))

      } else {

        return null

      }

    }

  } else {

    return null

  }

}

// Pythagorean Theorem is a^2 + b^2 = c^2 ... where 'c' is the hypotenuse.
export function side4sides(a=null, b=null, c=null) {

  if (typeof(a) == "number" && typeof(b) == "number" && !c) {

    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

  } else if (typeof(a) == "number" && !b && typeof(c) == "number") {

    return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2))

  } else if (!a && typeof(b) == "number" && typeof(c) == "number") {

    return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))

  } else {

    return null

  }

}
