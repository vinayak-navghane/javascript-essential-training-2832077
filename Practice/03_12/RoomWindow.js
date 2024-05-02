class Roomwindow {
  constructor(doors, isMasquitoProof, lock) {
    this.doors = doors;
    this.isMasquitoProof = isMasquitoProof;
    this.lock = lock;
  }

  masquitoProof(status) {
    this.isMasquitoProof = status;
  }
}

export default Roomwindow;
