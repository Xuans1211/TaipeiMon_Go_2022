Window_Message.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows()) + 40; // make it 40 pixels taller
};