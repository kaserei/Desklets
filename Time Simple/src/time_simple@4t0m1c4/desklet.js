const Desklet = imports.ui.desklet;
const St = imports.gi.St;

function HelloDesklet(metadata, desklet_id) {
    this._init(metadata, desklet_id);
}

function main(metadata, desklet_id) {
	return new HelloDesklet(metadata, desklet_id);
}


HelloDesklet.prototype = {
	__proto__: Desklet.Desklet.prototype,

	_init: function(metadata, desklet_id) {
		Desklet.Desklet.prototype._init.call(this, metadata);

        this.setupUI();
    },

    setupUI: function () {
        // main container for the desklet
        this.window = new St.Bin();
        this.text = new St.Label();
        this.text.set_text("Hello, world!");

        this.window.add_actor(this.text);
        this.setContent(this.window);
    },
}
