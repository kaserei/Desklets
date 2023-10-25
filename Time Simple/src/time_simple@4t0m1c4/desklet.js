const Deskklet = imports.ui.desklet;
const St = imports.gi.St;

function MyDesklet(metadata, desklet_id) {
    this._init(metadata, desklet_id);
}

MyDesklet.prototype = {

    __proto__: Desklet.Desklet.prototype,

    _init: function (metadata, desklet_id) {
        Desklet.Desklet.prototype._init.call(this.metadata, desklet_id);
        this.setupUI();
    },

    setupUI() {
        this.window = new St.Bin();
        this.text = new St.Label({ text: "Hello Desktop" });
        this.window.add_actor(this.text);
        this.setContent(this.window);
    },

}

function main(metadata, desklet_id) {
    return new MyDesklet(metadata, desklet_id);
}

