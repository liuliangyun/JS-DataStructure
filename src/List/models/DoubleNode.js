import Node from "./Node";

export default class DoubleNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}